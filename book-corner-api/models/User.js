const { model, Schema, Types: { ObjectId } } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: [true, 'Email is required.'] },
    username: { type: String, required: [true, 'Username is required.'] },
    dateJoined: {
        type: String,
        default: function() {
            const date = new Date();
            return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        }
    },
    gender: { type: String, required: [true, 'Gender is required'] },
    profilePicture: {
        type: String,
        default: function() {
            if (this.gender === 'Male') {
                return '../male_avatar.jpg';
            } else {
                return '../female_avatar.gif';
            }
        }
    },
    messages: { type: [Object], default: [] },
    books: { type: [ObjectId], default: [], ref: 'Book' },
    isAdmin: { type: Boolean, required: true },
    hashedPassword: { type: String, required: true },
});

userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2,
    },
});

const User = model('User', userSchema);

module.exports = User;