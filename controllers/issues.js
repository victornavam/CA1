const issues = require('../models/issues.js')();
module.exports = () => {
const getController = async (req, res) => {
res.json(await issues.get());
}
const getById = async(req, res) => {
res.json(await issues.get(parseInt(req.params.id)));
}
const getByProject = async(req, res) => {
res.json(await issues.get(parseInt(req.params.project_id)));
}


const postController = async(req, res) => {
const name = req.body.name;
const author = req.body.author;
const result = await issues.add(name, author);
res.json(result);
}
return {
getController,
postController,
getById,
getByProject,
}
}