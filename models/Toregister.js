const mongoose = require('mongoose')

const ToRegisterSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    number : {
        type : Number,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    cpassword : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    city: {
        type : String,
        required : true
    },
    country: {
        type: String,
        required : true
    },
    pincode : {
        type: Number,
        required: true
    }
},
{
    timestamps: true
}
)

const toRegisterModel = mongoose.model("Registrations", ToRegisterSchema )

module.exports = toRegisterModel