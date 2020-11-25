const comments = require('../models/com.js')();
module.exports = () => {
const getController = async (req, res) => {
    const {commentslist, error} = await comments.get()
    if(error){
        return res.status(500).json({ error })
    }
res.json( {comments: commentslist} );
}
const getCommentID = async ( req , res ) => {
    const {commentslist, error} = await comments.get(parseInt(req.params.id))
    if(error){
        return res.status(500).json({ error }) 
    }
    res.json( {comments: commentslist} );
}
const postController = async(req, res) => {
    const id = req.body.id;
    const text = req.body.text;
    const author = req.body.author;
    try{
        const {result, error} = await comments.add(id, text, author);
        res.json(result);
    }catch(ex){
        console.log("Error")
        return null;
        }
}

return {
getController,
postController,
getCommentID,
}
}