// express
const express = require("express");
const app = express();

// para que tome la carpeta public
app.use(express.static("public"));

// para que la pagina no tire el cant get /
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});


app.listen(4001, () => { console.log("Código funcionando y escuchando en el puerto 4001; coloca -localhost/4001- en el navegador por favor.")})