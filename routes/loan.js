const express = require("express")
const {create , modify , get , accept , all_loans} = require("../controllers/loan");
const {check} = require("express-validator")
const userAuth = require("../middlewares/userAuth");
const { route } = require("./user");
const router = express.Router()

router.post('/create', userAuth , create)
router.post('/modify', userAuth , modify)
router.get('/allLoans', userAuth , all_loans)
router.get('/get', userAuth , get)
router.get('/accept', userAuth , accept)

module.exports = router
