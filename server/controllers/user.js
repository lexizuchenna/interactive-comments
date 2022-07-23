const User = require('../models/Users')
const bcrypt = require('bcryptjs')

const getUser = (req, res) => {
    res.send('Hello World')
}

const registerUser = async (req, res) => {
   const {username, image, password} = req.body
    
   try {
    if(!username || !password) {
        res.status(400)
        throw new Error('Enter both username and Password')
    }
 
    const userExist = await User.findOne({username})
    if(userExist) {
         res.status(400)
         throw new Error('User already exists')
    }
 
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)
 
    const user = await User.create({
        username,
        image,
        password: hashedPassword,
    })
 
    res.status(201).json(user)
   } catch (error) {
       res.json(error)
       console.log(error)
   }


   
}

module.exports = {
    getUser, registerUser
}