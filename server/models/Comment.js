const mongoose =  require('mongoose')

const Comment = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users' || "User"
    },

    content: {
        type: String,
    },

    score: {
        type: Number,
        default: 1,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', Comment)

