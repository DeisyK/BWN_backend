const { body, params } = require("express-validator");

const validation = {
  changePassword:[
    body("newPassword")
      .notEmpty()
      .withMessage("Tienes que enviar una nueva contraseña")
      .bail()
      .isLength({ min:8 })
      .withMessage("Debe tener minimo 8 caracteres"),
    body("oldPassword").notEmpty().withMessage("Tienes que enviar la contraseña actual")
  ],
  login: [
    body("email")
      .notEmpty()
      .withMessage("Falta email")
      .bail()
      .isEmail()
      .withMessage("Ingresa un email valido"),
    body("password")
      .notEmpty()
      .withMessage("Tienes que ingresar una contraseña"),
  ],
  register: [
    body("name").notEmpty().withMessage("Tiene que ingresar un nombre"),
    body("email")
      .notEmpty()
      .withMessage("Falta email")
      .bail()
      .isEmail()
      .withMessage("Ingresa un email valido"),
  ],
  recovery: [
    body("email")
      .notEmpty()
      .withMessage("Falta email")
      .bail()
      .isEmail()
      .withMessage("Ingresa un email valido"),
  ],
};

module.exports = validation;
