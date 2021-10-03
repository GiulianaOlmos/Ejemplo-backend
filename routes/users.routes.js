const { Router } = require('express');
const router = Router();
const {
    addUsers, 
    deleteUser,
    getUsers,
    modifyUser
} = require('../services.mocked/users.mocked.service')

router.post('/users', addUsers );
router.delete('/users', deleteUser);
router.get('/users', getUsers);
router.put('/users', modifyUser);
module.exports = router;