/* eslint-disable no-unused-vars */
const User = require('../models/User');
const Professional = require('../models/modelProfessional');
const {hashPassword, checkPassword} = require('../services/password');
const {createToken} = require('../services/auth');
const auth = {};

auth.SignUP = async (req, res, next) => {
    try {
        let {
            name,
            age,
            phone,
            occupation,
            numberId,
            email,
            password,
            role
        } = req.body;

        let emailExist = await User.findOne({email});

        if (emailExist) {

            return res.status(401).send({success: false, message: 'Ya existe un usuario con este correo'});
        }

        if (password.length < 6)
            return res.status(400).json({msg: 'La contraseña debe tener al menos 6 caracteres.'});



        let hash = await hashPassword(password);
        password = hash;

        // Crear Profesional y usuario profesional
        if (role === 'pro') {
            const user = new User({email, password, role});

            const userSaved = await user.save();

            const token = createToken(userSaved);

            const professional = new Professional({
                name,
                age,
                phone,
                occupation,
                numberId,
                role,
                userId: userSaved._id
            });

            const proSaved = await professional.save();

            return res.status(201).send({success: true, token, doc: proSaved});
        }

        // Crear usuario admin
        if (role === 'adm') {
            const user = new User({email, password, role});

            const userSaved = await user.save();

            const token = createToken(userSaved);

            return res.status(201).send({success: true, token, doc: userSaved});
        }

        return res.status(500).json({msg: 'No se ha podido crear el usuario'});
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
};

auth.SignIn = async (req, res) => {
    try {
        let {email, password} = req.body;

        let user = await User.findOne({email});

        if (! user)
            return res.status(401).send({success: false, message: 'Usuario y/o contraseña, inválidos.'});



        const compare = await checkPassword(password, user.password);

        if (! compare)
            return res.status(401).send({success: false, message: 'Usuario y/o contraseña, inválidos.'});



        const token = createToken(user);

        return res.status(200).send({success: true, token, doc: user});
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
};

// Get All Users
auth.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
};

// Get User
auth.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
};

auth.updateUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findById(req.params.id);

        if (! user) {
            return res.status(404).send({success: false, message: 'Usuario no encontrado'});
        }

        const compare = await checkPassword(password, user.password);

        let passwordHash = ! compare ? await hashPassword(password) : user.password;

       const userUpdate = await User.findByIdAndUpdate(req.params.id, {email, password: passwordHash});
       userUpdate.save()

        res.json({msg: 'Usuario update'});
    } catch (err) {
        return res.status(500).json({
            msg: 'Error al actualizar: ' + err.message
        });
    }
};

module.exports = auth;
