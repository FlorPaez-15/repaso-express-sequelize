const express = require("express");
const morgan = require("morgan");

const routes = require("./routes/index");
const { db } = require("./models/index");

const app = express();

// bodyparser
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", routes);

// error middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err);
});

// conectar la base de datos
db.sync({ force: false }) //default === force: false
  .then(() => {
    console.log("db conectada correctamente");

    app.listen(3000, () => {
      console.log("server on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
