const express = require("express");
const path = require("path");
const cors = require("cors"); // Agrega esta línea

const app = express();

// Aplica el middleware cors
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));


app.get("/datos", (req, res) =>
    res.json([
        { id: 1, name: "Juan" },
        { id: 2, name: "Pedro" },
        { id: 3, name: "Pablo" },
    ])
    );
app.use(express.static('public'))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;