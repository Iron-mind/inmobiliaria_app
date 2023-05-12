const  jwt  =  require('jsonwebtoken');
//al recibir los datos del login *usuario* *contraseña* se verifica que el usuario exista en la base de datos
//y que la contraseña sea correcta (encriptada) y se genera un token de acceso (generateToken) que se devuelve al cliente
//para que sea guardada en el local storage del navegador
jwt.decode;

//user debe ser un objeto con la información del usuario
function generateToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET , { expiresIn: "24h" });
}

//verifyToken devuelve false si el token no es valido o true si la verificación es válida
function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET, (err) => {
    return err ? false : true;
  });
}

function decodeToken(token) {
  return jwt.decode(token,{complete:true});
}

//el usuario al entrar a una ruta protegida debe devolver un token de acceso en la cabecera con el nombre de "token"

const jwtMiddleware = (req, res, next) => {
  //recibiendo el token de la cabecera
  const token = req.headers["token"];
  if (token) {
    //verificando que el token sea correcto
    const verified = verifyToken(token);

    if (verified) {
      //si la verificación es correcta se pasa al siguiente middleware
      next();
      //la ruta debe tener esta form router.get("/rutaprotegida",jwtMiddleware,(req,res)=>{...})
      //al ejecutar next(),el usuario podrá acceder a la rut
    } else {
      //si el token no se puede verificar, se devuelve un error
      res.status(401).json({ msg: "Invalid token" });
      return false;
    }
  } else {
    //si el token no existe, se devuelve un error
    res.status(401).json({ msg: "no have token" });
    return false;
  }
};

module.exports = {  
    generateToken,
    verifyToken,
    decodeToken,
    jwtMiddleware
};