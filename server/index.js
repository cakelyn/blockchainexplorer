const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 1337;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// I am using my own server to make the request to Etherscan in order to keep
// my API key hidden (you can't use environmental keys on a React client)
app.post('/transactions', (req, res) => {
  const url = `http://api.etherscan.io/api?module=account&action=txlist&address=${req.body.address}&sort=desc&&apikey=${process.env.API_KEY}`;

  axios.get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });

});

app.listen(port, () => console.log(`Listening on ${port}`));
