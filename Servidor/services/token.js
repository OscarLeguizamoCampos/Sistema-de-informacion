var jwt = require("jsonwebtoken")



module.exports = {
    encode : async(user) =>{
        const token = jwt.sign({
            _id : user._id,
            identificacion : user.identificacion,
            nombres : user.nombres,
            apellidos : user.apellidos,
            rol : user.rol
        }, "UnafraseSecretaQueCodificalosdatosdelUsuario", {expiresIn : '24h' });
        return token;
    }
}