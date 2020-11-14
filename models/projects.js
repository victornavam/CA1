const db = require('../db')();
const COLLECTION = "projects" ;

const LOOKUP_ISSUES_PIPELINE = [
{
    $lookup: {
        from: "issues",
        localField: "_id",
        foreignField: "project_id",
        as: "issues",
    },
},
];

module.exports = () => {
const get = async (slug = null) => {   
console.log( "inside projects model"    );
if (!slug){
    try{
    const projects = await db.get(COLLECTION);
    return { projectslist: projects };
}catch(ex){
    return {error: ex}
}
}
try{
const name = await db.get(COLLECTION, { slug });
    return name;
}catch(ex){
    return {error: ex}
}
};
const add = async(name, slug, description) => {
    const nameCount = await db.count( COLLECTION );
    const results = await db.add( COLLECTION, {

id: nameCount + 1 ,
name: name,
slug: slug,
description: description,

});
return results.result;
};
const aggregateWithIssues = async () => {
    try{
    const projects = await db.aggregate(COLLECTION, LOOKUP_ISSUES_PIPELINE );
    return projects;
    }catch(ex){
        return {error: ex}
    }
    };
return {
get,
add,
aggregateWithIssues,

}
};