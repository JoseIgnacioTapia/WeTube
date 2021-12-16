const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json('Hi!');
});

app.get('/videos', (req, res) => {
  const q = req.query.q;
  const order = req.query.order;
  const videoDuration = req.query.videoDuration;
  console.log(req);
  const options = {
    method: 'GET',
    url: 'https://youtube.googleapis.com/youtube/v3/search',
    params: {
      type: 'video',
      q: q,
      order: order,
      videoDuration: videoDuration,
      part: 'snippet',
      maxResults: 25,
      key: process.env.REACT_APP_GOOGLE_API_KEY,
    },
  };

  axios
    .request(options)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
