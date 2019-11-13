const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000');
});

app.get('/prueba', function(req, res) {
  res.send("Yep it's working");
});

app.get('/love', (req, res) => {
  res.send('Hi Love');
});

app.listen(port, () => console.log(`Listening on port ${port}`));