var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');
const open = require('open');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('/images',express.static(__dirname + '/app/images'));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

const port = 7770;
const host = 'localhost';

app.listen(port, host, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  // open in users preferred browser to localhost:7770
  open(`http://${host}:${port}`);
  console.log(`Listening at http://${host}:${port}`);
});


