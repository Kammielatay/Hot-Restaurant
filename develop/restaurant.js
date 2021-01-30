var express = require("express");
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
var reservation = [
    {
        "name": "Kam",
        "phone": "333"
    }
];
var waitlist = [
    {
        "name": "Kammie",
        "phone": "333"
    }
];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
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

    if (reservation.length <= 5){
        reservation.push(newReservation)
    } else if (reservation.length > 5){
        waitlist.push(newReservation);
    }

    res.json(newReservation);
});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

