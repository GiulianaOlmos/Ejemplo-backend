const { Router } = require('express');
const router = Router();
// SIN BD
const {
    add,     
    get,
    getUser,
    modify,
    deleteUser,
} = require('../services.mocked/users.mocked.service')

// CON BD
const {
    addUsers
} = require('../services/users.service')

// cambiar las funciones CON BD si se va probar con  BD
router.post('/users', add ); // POST: insertar datos, toma datos del BODY
router.delete('/users', deleteUser); // DELETE: eliminar datos, toma datos del BODY
router.get('/users/:id', getUser); // GET con params (:id): consultar datos
router.get('/users', get); // GET con queryparams: consultar datos
router.put('/users', modify);// PUT/PATCH: modificar datos, toma datos del BODY
module.exports = router;