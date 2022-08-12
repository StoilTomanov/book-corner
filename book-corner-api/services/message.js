const Message = require( '../models/Messages' );
const User = require( '../models/User' );

async function getUserMessages(userId) {
    const user = await User.findById({_id: userId});
    console.log(user)
    return user.messages;
}

async function createMessage(from, to, message) {
    let toResult;
    if(to === 'admin_email') {
        toResult = await User.findOne({isAmin: true});
    } else {
        toResult = await User.findOne({email: to});
    }

    if(toResult) {
        const sentMsg = new Message(message);
        toResult.messages.push(sentMsg);
        await sentMsg.save();
        await toResult.save();
        return sentMsg;
    }
}

async function deleteMessage(holder, msgId) {
    const fromResult = await User.findOne({email: holder});
    if(!fromResult) { return null }
    let indexToDelete;
    fromResult.messages = fromResult.messages.map((msg, index) => {
        if(String(msg._id) === msgId) {
            indexToDelete = index;
        }
        return msg;
    });

    fromResult.messages.splice(indexToDelete, 1);
    await fromResult.save();
    const messages = await getUserMessages(fromResult._id);
    return messages;
}

module.exports = {
    getUserMessages,
    createMessage,
    deleteMessage,
}