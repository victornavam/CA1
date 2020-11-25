const users = require('../models/users.js')();
const db = require('../db')();

module.exports=() => {

const getController = async (req, res) => {
        res.json(await users.get());
        }
const getByEmail = async ( req , res ) => {
    const {userslist, error}= await users.get((req.params.email));
    if(error){
        return res.status(500).json({ error })
    }
res.json( {users: userslist});
}

const postController = async(req, res) => {           
    
    const name = req.body.name;
    const email = req.body.email;
    const usertype = req.body.usertype;
    const key = req.body.key;
    try{   
        const result = await users.add(name, email, usertype, key);
        res.json(result);
    }catch(ex){
        console.log("Error")
        return null;
        }
}


return {

getController,
postController,
getByEmail,

};
};