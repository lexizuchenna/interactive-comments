const mongoose =  require('mongoose')

const Reply = mongoose.Schema({
    user: {
        ref: 'User'
    },

    reply: {
        type: String,
    },

    score: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Reply', Reply)

