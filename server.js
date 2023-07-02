const express = require('express');
const path = require('path');

const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// app.use(express.static(__dirname+'dist'));+
app.use("/", express.static(path.join(__dirname, "dist")));


//Get Functions

app.get('/*', (req, res) => {
        // res.send(__dirname+"../dist/index.html");
        res.sendFile(path.join(__dirname, 'dist', 'index.html'), {}, () => res.end());
      });


//Post Functions



app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
