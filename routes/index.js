const express = require("express");
const router = express.Router();

// importando rutas
const userRoutes = require("./user");
const taskRoutes = require("./task");

// ruta para testeaer nuestro server
router.get("/", (req, res, next) => {
  res.send("todo bien");
});

// asignamos rutas especificas a un archivo que tambien contiene rutas
router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);

module.exports = router;
