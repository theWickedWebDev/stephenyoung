const { app } = require('./index.js');

const { PORT = 3000 } = process.env

app.listen(PORT, () => console.log('######## app running ########'))
