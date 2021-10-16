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

router.post('/quizgame/players', add );
router.delete('/quizgame/players', deletePlayer);
router.get('/quizgame/players/top', getTop);
router.get('/quizgame/players/:id', getPlayer);
router.get('/quizgame/players', get);
router.put('/quizgame/players', modify);
module.exports = router;