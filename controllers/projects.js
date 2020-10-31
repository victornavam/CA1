const projects = require('../models/projects.js')();
module.exports = () => {
const getController = async (req, res) => {
res.json(await projects.get());
}
//const getById = async (req, res ) => {
//res.json(await projects.get(parseInt(req.params.id)));
//}
const populatedController = async (reg, res) => {
res.json( await projects.aggregateWithIssues());
};
const getBySlug = async (req, res ) => {
res.json(await projects.get(req.params.slug));
}
const postController = async(req, res) => {
const name = req.body.name;
const slug = req.body.slug;
const description = req.body.description;
const result = await projects.add(name, slug, description);
res.json(result);
}
return {
getController,
postController,
getBySlug,
populatedController,

}
}