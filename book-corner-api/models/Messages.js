const { model, Schema } = require('mongoose');

const messageSchema = new Schema({
    from: { type: String, required: true },
    message: { type: String, required: true },
    date: {
        type: String,
        default: function() {
            const date = new Date();
            return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        }
    },
});

const Message = model('Message', messageSchema);

module.exports = Message;