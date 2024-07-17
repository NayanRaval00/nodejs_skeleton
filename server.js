const express = require('express');
const app = require('./src/app');
const bodyParser = require('body-parser');
const cors = require('cors')

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
app.disable("x-powered-by");
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
