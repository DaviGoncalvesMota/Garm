const { body } = require("express-validator")

const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("o nome é obrigatório")
            .isLength({ min: 3 })
            .withMessage("o nome precisa ter no minimo três caracteres"),
        body("email")
            .isString()
            .withMessage("o email é obrigatório")
            .isEmail()
            .withMessage("insira um email válido"),
        body("password")
            .isString()
            .withMessage("a senha é obrigatória")
            .isLength({ min: 5 })
            .withMessage("a Senha precisa ter no minimo cinco caracteres"),
        body("confirmPassword")
            .isString()
            .withMessage("a confirmação de senha é obrigatória")
            .custom((value, {req}) => {
                if(value != req.body.password) {        
                    throw new Error("as senhas não são iguais")
                }
                return true
            })
    ]
}

const loginValidation = () => {
    return [
        body("email")
            .isString()
            .withMessage("o email é obrigatório")
            .isEmail()
            .withMessage("insira um email válido"),
        body("password")
            .isString()
            .withMessage('a senha é obrigatória')
    ]
}

const userUpdateValidation = () => {
    return [
        body("name")
            .optional()
            .isLength({min: 3})
            .withMessage("o nome precisa de pelo menos 3 caracteres"),
        body("password")
            .optional()
            .isLength({min: 5})
            .withMessage('a senha precisa ter no minimo 5 caracteres')
    ]
} 

module.exports = {
    userCreateValidation,
    loginValidation,
    userUpdateValidation
}