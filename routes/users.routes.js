const { Router } = require('express');
const router = Router();
const {
    addUsers, 
    deleteUser,
    getUsers,
    modifyUser
} = require('../controllers/users.controllers')

router.post('/users/addUser', addUsers );
router.delete('/users/deleteUser', deleteUser);
router.get('/users/getUsers', getUsers);
router.put('/users/modifyUser', modifyUser);
module.exports = router;