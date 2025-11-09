app.get('/user/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});
