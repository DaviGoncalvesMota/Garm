const { body } = require("express-validator")

const photoInsertValidation = () => {
    return [
        body("title")
            .not()
            .equals("undefined")
            .withMessage('o titulo é obrigatório')
            .isString(0)
            .withMessage('o titulo é obrigatório')
            .isLength({ min: 3 })
            .withMessage('o titulo precisa ter no minimo 3 caracteres'),
        body("image").custom((value, { req }) => {
            if (!req.file) {
                throw new Error("a imagem é obrigatória")
            }
            return true
        })
    ]
}

const photoUpdateValidation = () => {
    return [
        body("title")
            .optional()
            .isString()
            .withMessage("o titulo é obrigatório")
            .isLength({ min: 3 })
            .withMessage('o titulo precisa ter no minimo 3 caracteres'),
    ]
}

const commentValidation = () => {
    return [
        body("comment")
            .isString()
            .withMessage("o cometário é obrigatório")
    ]
}

module.exports = {
    photoInsertValidation,
    photoUpdateValidation,
    commentValidation
}