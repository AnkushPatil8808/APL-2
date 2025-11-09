app.use(express.json());
app.post('/data', (req, res) => res.send(`You sent: ${req.body.name}`));
