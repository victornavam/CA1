const issues = require('../controllers/issues');

const db = require( '../db')();
const COLLECTION = "issues";
const LOOKUP_PROJECTS_PIPELINE = [
    {
        $lookup: {
            from: 'projects',
            localField: 'project_id',
            foreignField: '_id',
            as: 'a'
            }
            },
            { $project: {
            id: 1,
            title: 1,
            status: 1,
            project: {
            $arrayElemAt: [ "$a" , 0 ],
    },
    },
    },
    ];
module.exports = () => {
const get = async (issueNumber = null) => {
console.log('inside issues model');
if (!issueNumber) {
    const issues = await db.get(COLLECTION);
return issues;
}

const title = await db.get(COLLECTION, {issueNumber});
return title;
}
const get1 = async (project_id = null) => {
    if (!project_id) {
        const issues = await db.get(COLLECTION);
    return issues;
    }
    const proj = await db.get(COLLECTION, {project_id});
return proj;
}

const get2 = async (id = null) => {
    console.log('inside issues model');
    if (!id) {
        const issues = await db.get(COLLECTION);
    return issues;
    }
    
    const text = await db.get(COLLECTION, {id});
    return text;
    }
const add = async(issueNumber, title, description, status, project_id) => {
const issuesCount = await db.count( COLLECTION );
const results = await db.add( COLLECTION , {
id: issuesCount + 1,
issueNumber: issueNumber,
title: title,
description: description,
status: status,
project_id: project_id,
});
return results.result;
};
const aggregateWithProjects = async () => {
    const issues = await db.aggregate(COLLECTION, LOOKUP_PROJECTS_PIPELINE );
    return issues;
}
return {
get,
add,
get1,
get2,
aggregateWithProjects,
}
};