const { model, Schema, Types: { ObjectId } } = require('mongoose');

const messageSchema = new Schema({
    senderId: { type: ObjectId, required: false },
    from: { type: String, required: [true, 'Email is required'] },
    topic: { type: String, required: [true, 'Topic is required'] },
    message: { type: String, required: true },
    isAdmin: { type: Boolean, required: [true, 'Admin check required'] },
    date: {
        type: String,
        required: true,
        default: function() {
            const date = new Date();
            return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        }
    },
    isReplied: { type: Boolean, default: false, },
});

const Message = model('Message', messageSchema);

module.exports = Message;