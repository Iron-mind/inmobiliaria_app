const router = require("express").Router();
const Marker = require("../../models/marker.model");

router.get("/", async (req, res) => {
    try {
        res.json(await Marker.find());
     }
     catch (error) {
          console.log(error);
          res.status(400).send("Error al obtener los marcadores");
     }
    }
);


router.post("/", async (req, res) => {
    try {
        const newMarker = new Marker(req.body);
        await newMarker.save();
        res.send("Marcador creado exitosamente");
    }
    catch (error) {
        console.log(error);
        res.status(400).send("Error al crear el marcador");
    }
}
);

module.exports = router;