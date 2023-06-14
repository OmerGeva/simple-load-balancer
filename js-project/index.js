// spin up simple express server that returns the host name when hit with GET /
const express = require('express');
const os = require('os');
const app = express();

app.get('/', (req, res) => {
  // get container host name
  let hostname = os.hostname();
  res.send(`Hello from ${hostname}`);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
})