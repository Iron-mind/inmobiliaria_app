const Router = require("express").Router;
let router = Router();
const User = require("../../models/user.model");

router.post("/", (req, res) => {
  const newUser = new User(req.body);

  newUser
    .save()
    .then(() => {
      res.send("Usuario creado exitosamente");
    })
    .catch((error) => {
      res.status(400).send("Error al crear el usuario");
    });
});

router.get("/", async (req, res) => {
  try {
    res.json( await User.find())
  } catch (error) {
    console.log(error);
    res.status(400).send("Error al obtener los usuarios");
  }
});

module.exports = router;
