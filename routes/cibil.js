const express = require("express")
const { get } = require("../controllers/loan");
const {check} = require("express-validator")
const userAuth = require("../middlewares/userAuth");
const { route } = require("./user");
const router = express.Router()


router.get('/get', userAuth , get)

module.exports = router