app.use((req, res, next) => {
  console.log('Middleware running');
  next();
});
app.get('/', (req, res) => res.send('Middleware Example'));
