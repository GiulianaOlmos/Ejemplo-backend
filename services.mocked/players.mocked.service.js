const players = require('../models.mocked/player.mocked');
const playersServiceMocked = {};

playersServiceMocked.add = async (req, res) => {
    try {
        // let {playerName, team, score } = req.body
        console.log('body', req.body);
        const player = {
            playerName: req.body.playerName.toString(),
            team: req.body.team.toString(),
            score: req.body.score
        };
        // validaciones de inputs, score no negativo
        // validaciones de negocio, ejemplo que no se repita el playerName, el team sean solo los teams permitidos
        player.id = players.length + 1;
        console.log('player', player);
        players.push(player);
        console.log('players', players.length);
        return res.status(201).json();
    } catch (e) {
        return res.status(400);
    }
};

playersServiceMocked.modify = (req, res) => {
    try {
        // let {playerName, team, score } = req.body
        console.log('body', req.body);
        const {id} = req.body;
        const player = players.find(u => u.id === id);
        if (!player) // explicar == null == undefined
            return res.status(400).json({mesaage: 'Invalid player.'});
        // validaciones de inputs
        // validaciones de negocio
        player.team = req.body.team;
        player.score = req.body.score;
        console.log('player updated', player);
        return res.status(201).json();
    } catch (e) {
        return res.status(400);
    }
};

playersServiceMocked.get = (req, res) => {
    return res.status(200).json([players]);
};

playersServiceMocked.getTop = (req, res) => {
    console.log('getTop query', req.query);
    const limit = +req.query.limit;
    console.log('getTop limit', limit);
    const playersOrdered = players.sort((p1,p2)=> {
        {console.log('p2.score', p2.score, 'p1.score', p1.score, 'p2.score - p1.score', p2.score - p1.score); return p2.score - p1.score}
    });
    if (!!limit) {
        return playersServiceMocked.get(req, res);
    }    
    const playersFiltered = [].concat(playersOrdered).splice(0, limit);
    return res.status(200).json(playersFiltered);
};


playersServiceMocked.deletePlayer = (req, res) => {
    try {
        // let {playerName, team, score } = req.body
        console.log('body', req.body);
        const {id} = req.body;
        const player = players.find(u => u.id === id);
        if (!player) // explicar == null == undefined
            return res.status(400).json({msg: 'Error al borrar el jugador'});
        const index = players.indexOf(player);
        console.log('index ', index, player);
        console.log('player ', player);
        players.splice(index, 1);
        console.log('players', players.length);
        return res.status(201).json();
    } catch (e) {
        return res.status(400);
    }
};



playersServiceMocked.getPlayer = (req, res) => {
    console.log('getPlayer params', req.params);
    const id = +req.params.id;
    console.log('getPlayer id', id);
    const player = players.find(u => u.id === id);
    if (!player) // explicar == null == undefined
        return res.status(404).json();
    return res.status(200).json(player);
};



module.exports = playersServiceMocked;