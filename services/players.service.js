const playersCtrl = {};
const Player = require('../models/player')

playersCtrl.addPlayer = async (req, res) => {
    let {playerName, team, score } = req.body
    score ? score : 0
    let newPlayer = new Player({
        playerName,
        team,
        score
    })

    await newPlayer.save((err, userDb) => {
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
}

playersCtrl.modifyPlayer = async (req, res) => {
    let {playerName, score} = req.params
    console.log('playerName', playerName);


    const player = await Player.findOne({playerName : playerName})
    console.log('playerBefore', player);
    const newScore = player.score + Number(score) 
    console.log('player', newScore);

    await Player.findOneAndUpdate({playerName: playerName}, {score: newScore}, null, (err, userDb) => {
        if (err) {
            return res.status(400).json({
                status: 'ERROR',
                mensaje: err
            })
        }

        res.json(
            userDb
        )
    })
}

playersCtrl.getPlayersTop = async (req, res) => {
    let limit = req.query.limit
    console.log('limit' ,limit);

    const limitNumer = Number(limit)
    const players = await Player.find({})

    const topPlayer = players.sort((p1,p2)=> {
        {  return p2.score - p1.score}
    });
    console.log('topPLayer', topPlayer);

    const playerWithOrder = []
    for(let i = 0; i < limitNumer ; i++){
        if(topPlayer[i]){playerWithOrder.push(topPlayer[i])}
    }

    res.json(playerWithOrder)
}
module.exports = playersCtrl;