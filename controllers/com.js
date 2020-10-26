const comments = require('../models/com.js')();
module.exports = () => {
const getController = async (req, res) => {
res.json(await comments.get());
}
const getCommentID = async ( req , res ) => {
res.json(await comments.get(parseInt(req.params.id)));
}
const postController = async(req, res) => {
const name = req.body.name;
const result = await users.add(name);
res.json(result);
}
return {
getController,
postController,
getCommentID,
}
}