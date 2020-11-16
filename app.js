let express = require('express');
let app = express();


// app.get('/', function(req, res) {
//   res.sendFile(_dirname + '/views/index.html');
//   res.status(200)
// });
app.set('view engine',ejs)
app.get('/about', (req, res) => {
  res.send('This is the about page!');
});

app.get('/goodbye', (req, res) => {
  res.send('Goodbye, Edrees!');
});


app.listen(8000, () => {
  console.log('server started');
}); 