const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "*" }));

const chiliPeppersSongs = [
    {
        "title": "Under the Bridge",
        "album": "Blood Sugar Sex Magik",
        "year": 1991
    },
    {
        "title": "Californication",
        "album": "Californication",
        "year": 1999
    },
    {
        "title": "Scar Tissue",
        "album": "Californication",
        "year": 1999
    },
    {
      "title": "Otherside",
      "album": "Californication",
      "year": 1999
    },
    {
      "title": "Dani California",
      "album": "Stadium Arcadium",
      "year": 2006
    },
    {
      "title": "By the Way",
      "album": "By the Way",
      "year": 2002
    }

    
];

app.get("/datos", (req, res) => {
    res.json(chiliPeppersSongs);
});
app.use(express.static(path.join(__dirname, '../client/build')));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server ready on port ${port}.`));
module.exports = app;
