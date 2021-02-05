const S = require("sequelize");
const sequelize = require("../db");

class Task extends S.Model {} // Task heredar todas las propiedades de s.Model

Task.init(
  {
    titulo: {
      type: S.STRING,
      allowNull: false,
    },

    descripcion: {
      type: S.TEXT,
      defaultValue: "no hay ninguna descripción disponible",
    },

    available: {
      type: S.BOOLEAN,
      defaultValue: false,
    },

    miniDescripcion: {
      type: S.VIRTUAL, //enviar al front un nuevo campo con las caracteristicas que desee == no se guardan en la DB
      get() {
        //traer
        return (
          this.getDataValue("descripcion").slice(8) + " lo hice con un virtual"
        );
      },
    },
  },
  { sequelize: sequelize, modelName: "task" }
);

// metodo de clase
Task.finByTitlePepe = function () {
  return Task.findAll({
    where: {
      titulo: "pepe",
    },
  }).then((tareas) => {
    return tareas;
  });
};

// metodos de instancia : se aplican a un elemento especifo
Task.prototype.findSimilar = function (tarea) {
  // trarer elementos similares al que recibo
  return Task.findAll({
    where: {
      descripcion: {
        [S.Op.like]: tarea.descripcion,
      },
    },
  }).then((tareas) => {
    return tareas;
  });
};

module.exports = Task;
