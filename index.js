const express = require ('express');
const bodyParser = require ('body-parser');
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const projectsController = require ('./controllers/projects')();
const issuesController = require ('./controllers/issues')();
const usersController = require ('./controllers/users')();
const comController = require ('./controllers/com')();
const usersModels = require ('./models/users')();
const users = require('./models/users')();

const app = (module.exports = express());
// logging
app.use((req, res, next) => {
console.log('[%s] %s -- %s', new Date(), req.method, req.url);
next();
});
app.use(async (req, res, next) => {
    const FailedAuthMessage = {
    error: "Failed Authentication",
    message: "Go away!",
    code: "123", // Some useful error code
};
const suppliedKey = req.headers["x-api-key"];
const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
// Check Pre-shared key
if(!suppliedKey) {
console.log(" [%s] FAILED AUTHENTICATION -- %s, No Key Supplied", new Date(), clientIp);
FailedAuthMessage.code = "01";
return res.status(401).json(FailedAuthMessage);
};
const user = await users.getByKey(suppliedKey);
if (!user) {
console.log(" [%s] FAILED AUTHENTICATION -- %s, BAD Key Supplied", new Date(), clientIp);
FailedAuthMessage.code = "02";
return res.status(401).json(FailedAuthMessage);
}
next();
});

app.use(bodyParser.json());
const path = require('path');
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
const projects = require('./models/projects')();
app.get("/", async (req, res) => {
    const {projectslist} = await projects.get();
    console.log(projectslist);
res.render('index',{
    title: "Fworld",
    heading: "H World",
    text: "this the text",
    projects: projectslist
});
});
app.get('/issues', issuesController.getController);
app.post('/issues', issuesController.postController);
app.get('/issues/:issueNumber', issuesController.getBySlug);
app.get('/issues/:issueNumber/comments/:id', comController.getCommentID);
app.get("/issues/:project_id", issuesController.getByProject);
app.get( "/issues/populated", issuesController.populatedController);

app.get("/comments", comController.getController);
app.get("/comments/:id", comController.getCommentID);

app.get('/projects', projectsController.getController);
//app.get('/projects/:id', projectsController.getById);
app.post('/projects', projectsController.postController);
app.get('/projects/populated', projectsController.populatedController);
app.get('/projects/:slug', projectsController.getBySlug);

app.get('/users', usersController.getController);
app.get('/users/:email', usersController.getByEmail);
app.post('/users', usersController.postController);



app.listen(port, hostname, () => {
console.log(`Server running at http://${hostname} : ${port} /`);
});
// 404
app.use((req, res) => {
res.status(404).json ({
error: 404,
message: 'Route not found',
});
});