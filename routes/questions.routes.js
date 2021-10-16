const { Router } = require('express');
const router = Router();
const {
    get,
    getById
} = require('../services.mocked/questions.mocked.service')

router.get('/quizgame/questions', get);
router.get('/quizgame/questions/:id', getById);

module.exports = router;