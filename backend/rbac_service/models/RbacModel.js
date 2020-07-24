const mongoose = require("mongoose");

const RbacSchema = new mongoose.Schema({
	rbacData: {type: String, required: true},
}, {timestamps: true});


module.exports = mongoose.model("rbacData", RbacSchema);