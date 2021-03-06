const { body, params } = require("express-validator");

const validation = {
  changePassword: [
    body("newPassword")
      .notEmpty()
      .withMessage("Tienes que enviar una nueva contraseña")
      .bail()
      .isLength({ min: 8 })
      .withMessage("Debe tener minimo 8 caracteres"),
    body("oldPassword")
      .notEmpty()
      .withMessage("Tienes que enviar la contraseña actual"),
  ],
  addCategory: [
    body("name")
      .notEmpty()
      .withMessage("Tiene que enviar un nombre de categoria."),
  ],
  addContact: [
    body("name")
      .notEmpty()
      .withMessage("Tienes que enviar un nonmbre de contacto"),
    body("cellphone")
      .notEmpty()
      .withMessage("Tienes que asignarle un número teléfonico al contacto"),
    body("email")
      .notEmpty()
      .withMessage("Falta email")
      .bail()
      .isEmail()
      .withMessage("Ingresa un email valido"),
  ],
  editUser: [
    body("name").notEmpty().withMessage("Tiene que ingresar un nombre"),
  ],
  recovery: [
    body("email")
      .notEmpty()
      .withMessage("Falta email")
      .bail()
      .isEmail()
      .withMessage("Ingresa un email valido"),
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
