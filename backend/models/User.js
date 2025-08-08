const mongoose = require('mongoose');

const userSchema = new mongoose({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
    { timeStamps: true }

)

export default userSchema;