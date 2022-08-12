const router = require('express').Router();
const errorMapper = require('../utils/errorMapper');
const messageService = require('../services/message.js');

router.get('/:id', async(req, res) => {
    const userId = req.params.id;
    try {
        if (req.user) {
            const result = await messageService.getUserMessages(userId);
            return await res.status(200).json(result);
        }
    } catch (error) {
        console.error(error.message);
        const mappedError = errorMapper(error);
        res.status(404).json({ message: mappedError });
    };

    res.end();
});

router.patch('/:from/:to', async(req, res) => {
    const msgFrom = req.params.from;
    const msgTo = req.params.to;
    const messageBody = req.body.message;
    messageBody.to = msgTo;

    try {
        await messageService.createMessage(msgFrom, msgTo, messageBody);
    } catch (error) {
        console.error(error.message);
        const mappedError = errorMapper(error);
        res.status(404).json({ message: mappedError });
    };

    res.end();
});

router.delete('/:holder/:msgid', async(req, res) => {
    const holder = req.params.holder;
    const msgId = req.params.msgid;
    try {
        if (req.user) {
            const result = await messageService.deleteMessage(holder, msgId);
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error.message);
        const mappedError = errorMapper(error);
        res.status(404).json({ message: mappedError });
    };

    res.end();
});

module.exports = router;