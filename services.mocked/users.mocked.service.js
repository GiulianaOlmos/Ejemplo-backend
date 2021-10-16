const users = require('../models.mocked/user.mocked')
const usersServiceMocked = {};

// EJEmPLOS
usersServiceMocked.add = async (req, res) => {
    try {
        console.log('+++++++++++++++++++++++++++++++++++');
        console.log('body', req.body);
        const newUser = {
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            age: +req.body.age,
            id: +req.body.id
        }
        var encontrado = users.find(u=>u.id == newUser.id);
        console.log('encontrado', encontrado)
        if(encontrado)
        {
            return res.status(400).json();
        }
        console.log('newUser', newUser);
        // validaciones de inputs, ejemplos
        // validaciones de negocio, ejemplos edad minima.
        // ¿cómo genero el id? con BD no va a ser necesario
        //newUser.id = users.sort((u1, u2) => u2.id - u1.id).id + 1; // users.lenth + 1 y esta forma?
        console.log('newUser', newUser);
        users.push(newUser);
        console.log('users length', newUser.length);
        console.log('+++++++++++++++++++++++++++++++++++');
        return res.status(201).json();
    } catch (e) {
        return res.status(400);
    }
};

usersServiceMocked.modify = (req, res) => {
    users = [
        {
            id: 1,
            username: 'webcampmet',
            password: 'webcampmet',
            name: 'webcampmet nombre',
            age: 32,
            active: true
        },
        {
            id: 2,
            username: 'webcampmet2',
            password: 'webcampmet2',
            name: 'webcampmet2 nombre',
            age: 24,
            active: true
        },
        {
            id: 3,
            username: 'webcampmet1',
            password: 'webcampmet1',
            name: 'webcampmet1 nombre',
            age: 16,
            active: true
        }
    ];
    try {
        console.log('+++++++++++++++++++++++++++++++++++');
        console.log('body', req.body);
        const { id } = req.body;
        const user = users.find(u => u.id === id);
        if (!user) // explicar == null == undefined
            return res.status(400).json({ mesaage: 'Invalid user.' });
        // validaciones de inputs antes de asignar valores al objeto: req.body.name
        // validaciones de negocio
        // SOLO ACTUALIZO LOS DATOS PERMITOS A SER MODIFICADOS
        user.name = req.body.name; //asignacion previamente validados
        user.age = req.body.age;
        console.log('user updated', user);
        console.log('+++++++++++++++++++++++++++++++++++');
        return res.status(201).json();
    } catch (e) {
        return res.status(400);
    }
}

usersServiceMocked.get = (req, res) => {
    console.log('req.query', req.query)
    let limit;
    if(req.query.limit)
     limit = +req.query.limit;
    console.log('limit', limit)
    if(limit != undefined && limit != null  && limit != 0)
    {
        console.log('entró', limit)
        const usuariosFiltrados = users.splice(0, limit);
        res.json(usuariosFiltrados);
        return;
    }
    console.log('limit', limit)
    // localhost:8080/users?limit=2
    res.json(users);
    // HACER parte con filtros: limit
}


usersServiceMocked.getUser = (req, res) => {
    console.log('+++++++++++++++++++++++++++++++++++');
    console.log('getUser params', req.params);
    const id = +req.params.id;
    console.log('getUser id', id);
    const user = users.find(u => u.id === id);
    if (!user) // explicar == null == undefined
        return res.status(404).json();
    console.log('+++++++++++++++++++++++++++++++++++');
    return res.status(200).json(user);
}

usersServiceMocked.deleteUser = (req, res) => {
    try {
        console.log('+++++++++++++++++++++++++++++++++++');
        console.log('body', req.body);
        const { id } = req.body;
        const user = users.find(u => u.id === id);
        if (!user) // explicar == null == undefined
            return res.status(400).json({ msg: 'Invalid user.' });
        const index = users.indexOf(user);
        console.log('index ', index, user);
        console.log('user ', user);
        users.splice(index, 1);
        console.log('users', users.length);
        console.log('+++++++++++++++++++++++++++++++++++');
        return res.status(201).json();
    } catch (e) {
        return res.status(400);
    }
};

module.exports = usersServiceMocked;