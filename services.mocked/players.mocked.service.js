const players = require('../models.mocked/player.mocked');
const playersServiceMocked = {};

playersServiceMocked.addPlayer = async (req, res) => {
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

playersServiceMocked.getPlayers = (req, res) => {
    console.log('getPlayer query', req.query);
    const team = req.query.team;
    const limit = +req.query.limit;
    console.log('getplayers team limit', team, limit);
    console.log(!NaN, limit === NaN, !limit)
    if(!team && !limit)
        return res.status(200).json(players);
    let result = [];
    // validar valores team
    if(!!team){
        const playersFiltered = players.filter(u => u.team === team);
        if (!!playersFiltered) // explicar == null == undefined
            result = result.concat(playersFiltered);
        console.log('playersFiltered', result);
    }
    if(!!limit && limit > 0 && result.length > limit){
        const resultLimited = result.slice(0, limit)
        result = resultLimited;
        console.log('playersLimited', result);
    }
    return res.status(200).json(result);
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

playersServiceMocked.modifyPlayer = (req, res) => {
    try {
        // let {playerName, team, score } = req.body
        console.log('body', req.body);
        const {id} = req.body;
        const player = players.find(u => u.id === id);
        if (!player) // explicar == null == undefined
            return res.status(400).json({msg: 'Error al editar el jugador'});
        // validaciones de inputs
        // validaciones de negocio
        player.team = req.body.team;
        console.log('player', player);
        return res.status(201).json();
    } catch (e) {
        return res.status(400);
    }
};

module.exports = playersServiceMocked;