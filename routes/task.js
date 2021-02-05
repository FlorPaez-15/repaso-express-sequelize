const express = require("express");
const router = express.Router();

const { Task } = require("../models");

// ruta de prueba (usuarios)
router.get("/", (req, res, next) => {
  Task.findAll()
    .then((tareas) => {
      res.status(200).json(tareas);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const body = req.body;

  Task.create(body)
    .then((tareaCreada) => {
      res.status(201).json(tareaCreada);
    })
    .catch(next);
});

// PUT : modificar la data
router.put("/:id", (req, res, next) => {
  const tareaId = req.params.id;
  const body = req.body;

  Task.update(body, {
    where: {
      id: tareaId, //ubicar el elemento a actualizar
    },
    returning: true,
  })
    .then((tareaActualizada) => {
      /// [num, elementoActualizado]
      res.status(200).json(tareaActualizada[1][0]);
    })
    .catch(next);
});

// DELETE
router.delete("/:id", (req, res, next) => {
  const tareaId = req.params.id;

  Task.destroy({
    where: {
      id: tareaId,
    },
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(next);
});

module.exports = router;
