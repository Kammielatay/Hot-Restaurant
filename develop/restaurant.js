var express = require("express");
var path = require("path");


var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
var reservation = [
    {
        "name": "Kam",
        "phoneNumber": "333",
        "email": "kam@gmail.com",
        "uniqueID": "1",

    }
];
var waitlist = [
    {
        "name": "Kam",
        "phoneNumber": "333",
        "email": "kam@gmail.com",
        "uniqueID": "1",
    }
];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "../tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "../reservations.html"));
});

// Displaying all JSON
app.get("/api/tables", function (req, res) {
    return res.json(reservation);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});



// create new reservations
app.post("/api/reserve", function (req, res) {
    var newReservation = req.body;
    console.log(newReservation)

    if (reservation.length < 5){
        reservation.push(newReservation)
    } else {
        waitlist.push(newReservation);
    }

    res.json(newReservation);
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

