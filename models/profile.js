const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required:true,
        maxlength: 32,
        trim: true ,
        unique: true
    },
    name: {
        type: String,
        required: true,
        maxlength: 32
    },
    mobile: {
        type: String,
        required: true,
        maxlength: 10
    },
    address: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    aadhaarNo : {
        type: String,
        required: true,
        maxlength: 12
    },
    panNo: {
        type: String,
        required: true,
        maxlength: 10
    },
    bankAccountNo: {
        type: String,
        required: true
    },
    ifscCode: {
        type: String,
        required: true
    }
}, {timestamps: true})

profileSchema.methods = {

}

module.exports = mongoose.model("Profile",profileSchema)