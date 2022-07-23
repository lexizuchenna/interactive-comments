const express = require('express')
const { getComment, postComment } = require('../controllers/comment')
const router = express.Router()

router.get('/', getComment)
router.post('/', postComment)

module.exports = router