const mongoose =  require('mongoose')

const User = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please Add a Name']
    },

    image: {
        type: String,
        default: 'ImageX'
    },

    password: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', User)

