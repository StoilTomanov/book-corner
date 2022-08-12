const { model, Schema } = require('mongoose');

const messageSchema = new Schema({
    from: { type: String, required: [true, 'From email is required'] },
    to: { type: String, required: [true, 'To email is required'] },
    topic: { type: String, required: [true, 'Topic is required'] },
    message: { type: String, required: [true, 'Message is required'] },
    isAdmin: { type: Boolean, required: [true, 'Admin check required'] },
    date: {
        type: String,
        required: true,
        default: function() {
            const date = new Date();
            return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        }
    },
});

const Message = model('Message', messageSchema);

module.exports = Message;