const router = require("express").Router();
const Sale = require("../../models/sale.model");

router.get("/", async (req, res) => {
   try {
      res.json(await Sale.find());
    }
    catch (error) {
        console.log(error);
        res.status(400).send("Error al obtener las ventas");
    }
}
);

router.post("/", async (req, res) => {
    try {
        const newSale = new Sale(req.body);
        await newSale.save();
        res.send("Venta creada exitosamente");
    }
    catch (error) {
        console.log(error);
        res.status(400).send("Error al crear la venta");
    }
}
);

module.exports = router;