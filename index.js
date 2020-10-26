const express = require ('express');
const bodyParser = require ('body-parser');
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const projectsController = require ('./controllers/projects')();
const issuesController = require ('./controllers/issues')();
const usersController = require ('./controllers/users')();
const comController = require ('./controllers/com')();
const app = (module.exports = express ());
// logging
app.use((req, res, next) => {
// Display log for requests
console.log('[%s] %s -- %s', new Date (), req.method, req.url);
next();
});
app.use(bodyParser.json());

app.get('/issues', issuesController.getController);
app.post('/issues', issuesController.postController);
app.get('/issues/:id', issuesController.getById);
app.get("/issues/project_id/:project_id", issuesController.getByProject);

app.get("/issues/comments", comController.getController);
app.get("/issues/comments/:id", comController.getCommentID);

app.get('/projects', projectsController.getController);
app.get('/projects/:id', projectsController.getById);
app.post('/projects', projectsController.postController);

app.get('/users', usersController.getController);
app.get('/users/:id', usersController.getById);
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