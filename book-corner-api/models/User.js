const { model, Schema } = require('mongoose');

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
                return 'assets/male_avatar.jpg';
            } else {
                return 'assets/female_avatar.gif';
            }
        }
    },
    messages: { type: [Object], default: [] },
    books: { type: [''], default: [], ref: 'Book' },
    isAdmin: { type: Boolean, required: true },
    address: { type: String, required: false },
    telephone: { type: String, required: false },
    birthDate: { type: String, required: false },
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