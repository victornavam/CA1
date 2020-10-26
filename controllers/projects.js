const projects = require('../models/projects.js')();
module.exports = () => {
const getController = async (req, res) => {
res.json(await projects.get());
}
const getById = async (req, res ) => {
res.json(await projects.get(parseInt(req.params.id)));
}
const postController = async(req, res) => {
const name = req.body.name;
const result = await projects.add(name);
res.json(result);
}
return {
getController,
postController,
getById
}
}