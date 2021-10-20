const { Router } = require('express');
const router = Router();
const {
    add,     
    get,
    getPlayer,
    modify,
    deletePlayer,
    getTop,
} = require('../services.mocked/players.mocked.service')

const {
    addPlayer,
    modifyPlayer,
    getPlayersTop
} = require('../services/players.service')

router.post('/quizgame/players', addPlayer );
/* router.delete('/quizgame/players', deletePlayer); */
router.get('/quizgame/players/top', getPlayersTop);
/* router.get('/quizgame/players/:id', getPlayer);
router.get('/quizgame/players', get); */
router.put('/quizgame/players/:playerName/:score', modifyPlayer);
module.exports = router;