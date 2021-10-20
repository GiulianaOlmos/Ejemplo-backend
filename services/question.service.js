const questionCtrl = {};
const Question = require('../models/question')

questionCtrl.getCuestion = async (req, res) => {
    let limit = req.query.limit
    console.log('limit' ,limit);

    const limitNumer = Number(limit)
    await Question.find({}, null, {limit: limitNumer}, (err, question) => {
        if (err) {
            return res.status(400).json({
                status: 'ERROR',
                mensaje: err
            })
        }

        res.json(question)
    })
}

module.exports = questionCtrl;