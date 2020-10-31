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
    const projects = await db.get(COLLECTION);
    return projects;
}
const name = await db.get(COLLECTION, { slug });
    return name;
}



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
    const projects = await db.aggregate(COLLECTION, LOOKUP_ISSUES_PIPELINE );
    return projects;
    };
return {
get,
add,
aggregateWithIssues,

}
};