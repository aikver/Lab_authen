
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_name: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
},
{ timestamps: true,versionKey: false

}
);

const user = mongoose.model('user', UserSchema);
module.exports = user;