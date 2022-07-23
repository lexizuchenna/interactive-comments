const express = require("express");
const router = express.Router();
const { getUser, registerUser } = require("../controllers/user");

router.get("/", getUser);
router.post('/', registerUser)

module.exports = router;
