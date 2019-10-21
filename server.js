const express = require("express"),
           bp = require("body-parser"),
      DB_NAME = "petshelterDB",
          app = express(),
         port = 8000,
         cors = require('cors');

app.use(express.static(__dirname + "/client/build"));
app.use(express.json());
app.use(cors());

require('./utils/mongoose')(DB_NAME);
require('./utils/routes')(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

