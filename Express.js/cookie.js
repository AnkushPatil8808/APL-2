const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/setcookie', (req, res) => {
  res.cookie('name', 'Kunal');
  res.send('Cookie Set!');
});
