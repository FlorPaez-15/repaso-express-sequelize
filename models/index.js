// enrutar cada modelo que creemos

// requerir la base de datos
const db = require("../db");

//requiero mis modelos
const User = require("./user.model");
const Task = require("./task.model");

// exporto todo junto
module.exports = { db, User, Task };
