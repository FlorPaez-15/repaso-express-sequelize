const express = require("express");
const router = express.Router();

// requerir modelo creado
const { User } = require("../models/index");

// GET
router.get("/", (req, res, next) => {
  User.findAll()
    .then((usuarios) => {
      res.status(200).json(usuarios);
    })
    .catch(next);
});

// GET : mas especifico (:id)
router.get("/:id", (req, res, next) => {
  const userId = req.params.id;

  User.findByPk(userId)
    .then((usuario) => {
      if (!usuario) return res.status(404).send("user not found");
      res.status(200).json(usuario);
    })
    .catch(next);
});

// POST
router.post("/", (req, res, next) => {
  const body = req.body; // objeto donde me llega toda la info

  User.create(body)
    .then((usuarioCreado) => {
      res.status(201).json(usuarioCreado); //json === send
    })
    .catch(); //falle
});

module.exports = router;
