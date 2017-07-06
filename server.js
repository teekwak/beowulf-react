const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
app.use(compression());
app.use(express.static(__dirname + '/www'));

app.get('*', (req, res) => {
  console.log("rendered on server");
  res.sendFile('index.html', { root: path.join(__dirname, './www') });
  res.flush();
});

const server = app.listen(3000, 'localhost', function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
