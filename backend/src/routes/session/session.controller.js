const { Router } = require("express");
const User = require("../../models/user.model");
const { generateToken, verifyToken } = require("../../routes/jwt");

let router = Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
 
    const user = await User.findOne({ email: email });
    if (user) {
        //bcrypt.compareSync(password, user.password)
      if (password === user.password) {
        res.status(200).json({
          msg:"Iniciaste Sesión",
          token: generateToken({ email: email, name: user.name}),
          ...user,
        });
      } else {
        res.status(403).json({ msg: " Incorrect Password" });
      }
    } else {
      res.status(404).json({ msg: " Username not found" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/verifytoken", (req, res) => {
    try {
      let { token } = req.body;
      const verified = verifyToken(token);
      res.status(200).json({ validation: verified });
  
    } catch (e) {
        console.log(e);
        res.json({msg:'Algo salió mal'})
    }
  
  
  });

module.exports = router;