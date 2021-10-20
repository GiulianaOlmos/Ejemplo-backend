const { Router } = require('express');
const router = Router();
const {
    get,
    getById
} = require('../services.mocked/questions.mocked.service')

const {
    getCuestion
} = require('../services/question.service')
router.get('/quizgame/questions', getCuestion);
/* router.get('/quizgame/questions/:id', getById) */;

module.exports = router;