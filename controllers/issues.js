const issues = require('../models/issues.js')();
module.exports = () => {
const getController = async (req, res) => {
res.json(await issues.get());
}
const getBySlug = async(req, res) => {
res.json(await issues.get(req.params.issueNumber));
}
const getBySlugCom = async(req, res) => {
res.json(await issues.get2(parseInt(req.params.comments)));
}
const getByProject = async(req, res) => {
res.json(await issues.get(parseInt(req.params.project_id)));
}
const populatedController = async (req, res) => {
res.json( await issues.aggregateWithProjects());
};

const postController = async(req, res) => {
const issueNumber = req.body.issueNumber;
const title = req.body.title;
const description = req.body.description;
const status = req.body.status;
const project_id = req.body.project_id;
const result = await issues.add(issueNumber, title, description, status, project_id);
res.json(result);
}
return {
getController,
postController,
getBySlug,
getByProject,
populatedController,
getBySlugCom,
}
}