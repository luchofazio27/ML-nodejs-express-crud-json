// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/userController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddlewares')
const authMiddleware = require('../middlewares/authMiddlewares');

//Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

//Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, usersController.login);

//Procesar el login
router.post('/login', usersController.loginProcess);

//Perfil del usuario
router.get('/profile', authMiddleware, usersController.profile);

//Logout
router.get('/logout', usersController.logout);

module.exports = router;