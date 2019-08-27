var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: 'String', required: true },
    phone: { type: 'String', required: true },
    status: { type: 'String', required: true },
    otp: { type: 'String', required: false },
    password: { type: 'String', required: true }
});

module.exports = mongoose.model("Users", userSchema);;