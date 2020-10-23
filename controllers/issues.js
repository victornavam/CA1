const issues = require('../models/issues.js')();
module.exports = () => {
const getController = (req, res) => {
res.setHeader('Content-Type', 'application/json');
return res.json(issues.get());
}
const getById = (req, res) => {
res.setHeader('Content-Type', 'application/json');
res.json(issues.get(req.params.id));
}
const postController = (req, res) => {
const name = req.body.name;
const author = req.body.author;
issues.add(name, author);
return res.end(`POST: ${name}`);
}
return {
getController,
postController,
getById
}
}