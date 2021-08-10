const router = require("express").Router();
const categoriasController = require("../../controllers/categoriasController");
const { verifyUsuario } = require("../../middlewares/auth/auth");
const validation = require("../../middlewares/validation");

router.get("/list", verifyUsuario, categoriasController.list);
router.post(
  "/add",
  verifyUsuario,
  validation.addCategory,
  categoriasController.add
);
router.get("/:id/one", verifyUsuario, categoriasController.one);
router.patch(
  "/:id/edit",
  validation.addCategory,
  verifyUsuario,
  categoriasController.update
);
router.delete("/:id/destroy", verifyUsuario, categoriasController.destroy);

module.exports = router;
