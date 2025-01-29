const express = require("express");
const nocache = require("nocache");

const app = express();

app.use(nocache());
app.use(express.static('public'));



app.listen(1234, () => {
    console.log("Running");
});
