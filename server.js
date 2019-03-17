//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');

const app = express();

app.use(cors());
app.use(compression());
app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, (res) => {

});
