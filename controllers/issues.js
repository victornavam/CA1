const issues = require('../models/issues.js')();
module.exports = () => {
const getController = async (req, res) => {
    const {issueslist, error}= await issues.get()
    if(erro){
        return res.status(500).json({ error })
    }
res.json( {issues: issueslist});
}
const getBySlug = async(req, res) => {
    const {issueslist, error} = await issues.get(req.params.issueNumber)
    if(error){
        return res.status(500).json({ error })
    }
res.json( {issues: issueslist} );
}
const getBySlugCom = async(req, res) => {
    const {issueslist, error} = await issues.get2(parseInt(req.params.comments))
    if(error){
        return res.status(500).json({ error })
    }
res.json( {issues: issueslist} );
}
const getByProject = async(req, res) => {
    const {issueslist, error} = await issues.get(parseInt(req.params.project_id))
    if(error){
        return res.status(500).json({ error })
    }
res.json( {issues: issueslist});
}
const populatedController = async (req, res) => {
    const {issueslist, error} = await issues.aggregateWithProjects()
    if(error){
        return res.status(500).json({ error })
    }
    res.json( {issues: issueslist});};

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