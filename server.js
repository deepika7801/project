const PORT = 8000;
let bodyParser = require("body-parser");
let express = require("express");
let app = express();
var fs = require("fs");
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));