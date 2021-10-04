const userCtrl = {};
const User = require('../models/player')

userCtrl.addUsers = async (req, res) => {
    let {playerName, team, score } = req.body
    let user = new User({
        playerName,
        team,
        score
    })

    await user.save((err, userDb) => {
        if (err) {
            return res.status(400).json({
                status: 'ERROR',
                mensaje: err
            })
        }

        res.json({
            status: 'OK',
            user: userDb
        })
    })
};

userCtrl.deleteUser = (req, res) => {
    const {id} = req.body
    user.findByIdAndDelete(id,null,(err, userDb) => {
        if (err) {
            return res.status(400).json({
                status: 'ERROR',
                mensaje: err
            })
        }

        res.json({
            status: 'OK',
            user: userDb
        })
    } )
};

userCtrl.getUsers = (req, res) => {
    user.find((err, userDb) => {
        if (err) {
            return res.status(400).json({
                status: 'ERROR',
                mensaje: err
            })
        }

        res.json({
            status: 'OK',
            user: userDb
        })
    } )
}

userCtrl.modifyUser = (req, res) => {
    const {score, id} = req.body;
    user.findByIdAndUpdate(id, {score}, (err, userDb) => {
        if (err) {
            return res.status(400).json({
                status: 'ERROR',
                mensaje: err
            })
        }

        res.json({
            status: 'OK',
            user: userDb
        })
    } )
}

module.exports = userCtrl;