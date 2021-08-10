const router = require("express").Router();
const contactoController = require("../../controllers/contactosController");
const { verifyUsuario } = require("../../middlewares/auth/auth");
const validation = require("../../middlewares/validation");

router.get("/list", verifyUsuario, contactoController.list);
router.get("/one/:id", verifyUsuario, contactoController.one);
router.post(
  "/add",
  validation.addContact,
  verifyUsuario,
  contactoController.add
);
router.patch(
  "/:id/edit",
  validation.addContact,
  verifyUsuario,
  contactoController.edit
);
router.delete("/:id/destroy", verifyUsuario, contactoController.destroy);

module.exports = router;
