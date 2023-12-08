const express = require("express");
const router = express.Router();

// importando controllers
const ProductControllers = require("../controllers/ProductControllers");

router.get("/", ProductControllers.showProducts);

router.get("/create", ProductControllers.createProduct);
router.post("/create", ProductControllers.createProductPost);

router.get("/:id", ProductControllers.showProduct);
router.post("/remove/:id", ProductControllers.removeProduct);

router.get("/edit/:id", ProductControllers.editProduct);
router.post("/edit", ProductControllers.editProductPost);

module.exports = router;
