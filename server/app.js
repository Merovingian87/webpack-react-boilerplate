const express = require('express');
const path = require('path');

const pathToPublicDir = path.join(__dirname, '../client/public');
const app = express();

app.use(express.static(pathToPublicDir));
app.use(express.json());

app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('listening...');
});