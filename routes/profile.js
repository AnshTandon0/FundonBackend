const express = require("express")
const {create , modify} = require("../controllers/user");
const {check} = require("express-validator")
const userAuth = require("../middlewares/userAuth")
const router = express.Router()

router.post('/create', userAuth , create)
router.post('/modify', userAuth , modify)

module.exports = router
