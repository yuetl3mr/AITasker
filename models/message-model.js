const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    data: String,
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        required: true
    },
}, {
    timestamps: true
});

const Message = mongoose.model("Message", messageSchema, "messages");

module.exports = Message;