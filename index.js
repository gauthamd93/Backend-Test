const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // handling multiple ports , error

const app = express();
const router = express.Router();

app.use(cors());

app.use(
    router.get('/', (req, res) => {
      // request response handler
      res.send({
        status: 200,
        message: "Hiii",
        author: "Jane Doe"
      });
    })
  );

const port = 9000;
app.listen(port, () => {
  console.log('running');
});