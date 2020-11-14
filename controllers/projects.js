const projects = require('../models/projects.js')();
module.exports = () => {
const getController = async (req, res) => {
    const {projectslist, error} = await projects.get()
    if(error){
        return res.status(500).json({ error })
    }
res.json( {projects: projectslist} );
}
//const getById = async (req, res ) => {
//res.json(await projects.get(parseInt(req.params.id)));
//}
const populatedController = async (reg, res) => {
    const {projectslist, error} = await projects.aggregateWithIssues();
    if(error){
        return res.status(500).json({ error })
    }
    res.json( {projects: projectslist});
};
const getBySlug = async (req, res ) => {
    const {projectslist, error} = await projects.get(req.params.slug);
    if(error){
        return res.status(500).json({ error })
    }
res.json( {projects: projectslist} );
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