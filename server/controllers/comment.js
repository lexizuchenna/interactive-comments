const Comment = require('../models/Comment')


const getComment = (req, res) => {
    res.json(req.comment)
    res.send('Hello')
}

const postComment = async (req, res) => {
   const content = req.body
    
   try {
    // if(!username || !password) {
    //     res.status(400)
    //     throw new Error('Enter both username and Password')
    // }
 
    // const userExist = await User.findOne({username})
    // if(userExist) {
    //      res.status(400)
    //      throw new Error('User already exists')
    // }
 
    // const salt = await bcrypt.genSalt(12)
    // const hashedPassword = await bcrypt.hash(password, salt)
 
    const comment = await Comment.create(content)
 
    res.status(201).json(comment)
   } catch (error) {
       res.json(error)
       console.log(error)
   }


   
}

module.exports = {
    getComment, postComment
}