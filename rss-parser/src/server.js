const { app } = require('./app');

const { PORT } = process.env;

app.listen(PORT, async () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
