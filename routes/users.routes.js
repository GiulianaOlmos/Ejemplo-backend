const { Router } = require('express');
const router = Router();
const {
    add,     
    get,
    getUser,
    modify,
    deleteUser,
} = require('../services.mocked/users.mocked.service')

router.post('/users', add );
router.delete('/users', deleteUser);
router.get('/users/:id', getUser);
router.get('/users', get);
router.put('/users', modify);
module.exports = router;