const db = require('../db')();
const COLLECTION = "issues/comments" ;
module.exports = () => {
const get = async (id = null) => {   

console.log(' inside comments model');
if (!id){
    const commnets = await db.get(COLLECTION);
    return commnets;
}
const comment = await db.get(COLLECTION, { id });
    return comment;
}
const add = async(name) => {
    const nameCount = await db.count( COLLECTION );
    const results = await db.add( COLLECTION, {

id: nameCount + 1 ,
name: name,
});
return results.result;
}
return {
get,
add
}
};