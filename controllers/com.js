const comments = require('../models/com.js')();
module.exports = () => {
const getController = async (req, res) => {
res.json(await comments.get());
}
const getCommentID = async ( req , res ) => {
res.json(await comments.get(parseInt(req.params.id)));
}
const postController = async(req, res) => {
const id = req.body.id;
const text = req.body.text;
const author = req.body.author;
const result = await users.add(id, text, author);
res.json(result);
}
return {
getController,
postController,
getCommentID,
}
}