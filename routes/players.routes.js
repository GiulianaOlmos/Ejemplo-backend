const { Router } = require('express');
const router = Router();
const {
    addPlayer, 
    deletePlayer,
    getPlayers,
    getPlayer,
    modifyPlayer
} = require('../services.mocked/players.mocked.service')

router.post('/players', addPlayer );
router.delete('/players', deletePlayer);
router.get('/players/:id', getPlayer);
router.get('/players', getPlayers);
router.put('/players', modifyPlayer);
module.exports = router;