const S = require("sequelize");
const sequelize = require("../db");

class User extends S.Model {}

User.init(
  {
    nombre: {
      type: S.STRING,
      allowNull: false,
    },

    apellido: {
      type: S.STRING,
      validate: {
        notEmpty: false,
      },
    },

    email: {
      type: S.STRING,
      validate: {
        isEmail: true,
      },
    },

    secretCode: {
      type: S.INTEGER,
      allowNull: false,
    }, //mediante un hook, voy a crear automaticamente esta info
  },
  { sequelize: sequelize, modelName: "users" }
);

// agregar un hook beforeValidate (antes de que se valide) y voy a asignarle un "secretCode" a cada instancia creada
User.addHook("beforeValidate", (user, options) => {
  user.secretCode = parseInt(Math.random() * 100);
});

/**
 * 1. validacion en el front
 * 2. rutas (express)
 * 3. modelos (sql)
 */

module.exports = User;
