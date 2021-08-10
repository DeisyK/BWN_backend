const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const { verifyUsuario } = require("../../middlewares/auth/auth");
const validation = require("../../middlewares/validation");

router.get("/get-usuario", loginController.usuario);
router.post("/into", validation.login, loginController.login);
router.post("/register", validation.register, loginController.register);
router.patch("/recovery", validation.recovery, loginController.recovery);
router.patch(
  "/change/password",
  verifyUsuario,
  validation.changePassword,
  loginController.change
);
router.patch(
  "/:id/edit",
  validation.register,
  verifyUsuario,
  loginController.edit
);
router.delete("/:id/destroy", verifyUsuario, loginController.destroy);

module.exports = router;
