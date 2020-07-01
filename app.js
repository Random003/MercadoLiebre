const express = require("express");
const app = express();


app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});


app.listen(4001, () => { console.log("Esta funcionando y escuchando en el puerto 4001; coloca localhost/4001 por favor")})