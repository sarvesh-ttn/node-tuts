const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
    userId:"String",
    email:{
        type:String,
        required:true
    },
	myPassword: {
		type: String,
		// required: true
	},
});
module.exports = mongoose.model("User",UserSchema)