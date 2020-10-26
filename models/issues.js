const db = require( '../db')();
const COLLECTION = "issues" ;
module.exports = () => {
const get = async (id = null) => {
console.log('inside issues model');
if (!id) {
    const issues = await db.get(COLLECTION);
return issues;
}

const issue = await db.get(COLLECTION, {id});
return issue;
}
const get1 = async (project_id = null) => {
    if (!project_id) {
        const proj = await db.get1(COLLECTION);
    return proj;
    }
    const proj = await db.get1(COLLECTION, {project_id});
return proj;
}
const add = async(name, author) => {
const issuesCount = await db.count( COLLECTION );
const results = await db.add( COLLECTION , {
id: issuesCount + 1,
name: name,
author: author
});
return results.result;
}
return {
get,
add,
get1,
}
};