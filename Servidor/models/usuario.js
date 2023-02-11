const mongoose = require('mongoose');
const { Schema } = mongoose;

var validateIdentificacion = function(identificacion) {
    var re = /\d/;
    return re.test(identificacion)
};


const usuarioSchema = new Schema({
    identificacion : {
        type : Number,
        required : true,
        maxlength : 100,
        trim : true,
        unique : true,
        validate : [validateIdentificacion, 'Por favor ingrese idenitficacion valida'],
        match : [/\d/,'Por favor ingrese idenitficacion valida']
    },
    nombres : {
        type : String,
        required : true,
        maxlength : 100
    },
    apellidos : {
        type : String,
        required : true,
        maxlength : 100
    },
    password : {
        type : String,
        required : true,
        minlength : 8,
        maxlength : 100
    },
    estado : {
        type : Number,
        default : 1
    },
    rol : {
        type : String,
        required : true,
        enum :["Administrador", "Gestor"] 

    },
    createdAt : {
        type : Date,
        default : Date.now
    },

})


//Convertirlo a un modelo y exportarlo

const Usuario = mongoose.model('usuario', usuarioSchema);

module.exports = Usuario