const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Plantable server working")
});


app.listen(1234);
