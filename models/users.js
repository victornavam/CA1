const db = require('../db')();
const COLLECTION = "users";
module.exports = () => {
const get = async (id = null) => {
console.log('inside users model');
if (!id) {
const users = await db.get(COLLECTION);
return users;
    }
    const name = await db.get(COLLECTION, { id });
        return name;
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