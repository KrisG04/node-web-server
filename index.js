const express = require('express');
const fs = require('fs');

var app = express();
// console.log(new Date().toString());
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
  var now = new Date().toString();

  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n')
  next();
});

app.use((req, res, next) => {
  res.render(view)
})
//Result for the root directory
app.get('/',(req, res) => {
  // res.send('Hello Express');
  res.send({
    name: "John",
    city: ["New York", "Manhattan"]
  })
});

app.get('/about', (req, res) => {
  res.send('About the page');
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: "Unable to encrypt method. Un-authenticated"
  })
})

app.listen(3000, () => {
  console.log("Server is active on port 3000");
});
