const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
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

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
