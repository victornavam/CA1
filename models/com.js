const db = require('../db')();
//const issuesController = require('../controllers/issues');
const COLLECTION = "issues";
module.exports = () => {
const get = async (id = null) => {   
console.log(' inside comments model');
if (!id){
    try{
    const comments = await db.get(COLLECTION);
    return { commentslist: comments};
}catch(ex){
    return {error: ex}
}
}
try{
const comment = await db.get(COLLECTION, { id });
    return comment;
}catch(ex){
    return{error: ex}
}
};
const add = async(id, text, author) => {
    const textCount = await db.count( COLLECTION );
    const results = await db.add( COLLECTION, {

id: textCount + 1 ,
id: id,
text: text,
author: author,
});
return results.result;
}
return {
get,
add
}
};