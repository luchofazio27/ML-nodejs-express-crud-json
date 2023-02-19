// ************ Require's ************
const path = require('path');

//*** Require Express-validator ***/
const { body } = require('express-validator');


//*** VALIDATIONS ***/
module.exports = [
    body("name").notEmpty().withMessage('Tienes que escribir un nombre'),
    body("price").notEmpty().withMessage('Tienes que escribir un precio'),
    body("discount").notEmpty().withMessage('Tienes que escribir un descuento'),
    body("category").notEmpty().withMessage('Tienes que escribir una categoria'),
    body("description").notEmpty().withMessage('Tienes que escribir una descripcion'),
    body("avatar").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error('Tiene que subir una imagen');    
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;
    })
]