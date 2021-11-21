
const mongoose = require("mongoose")
const app = require("./app")
var Empresa = require("./src/controladores/empresa.controlador")

mongoose.Promise = global.Promise
mongoose.connect(/*'mongodb://localhost:27017/dbSucursales'*/'mongodb+srv://elvis:root.@sucursales.htt5q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    
    Empresa.empresaAdmin()

    console.log('Se encuentra conectado a la base de datos');

    app.listen(process.env.PORT || 3000, function() {
        console.log("Servidor corriendo en el puerto 3000");
    })
}).catch(err => console.log(err))