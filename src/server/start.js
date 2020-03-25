const { app } = require('./index.js');
var log = require('loglevel');

const DEFAULT_PORT = 3000;

const { PORT = DEFAULT_PORT } = process.env;

app.listen(PORT, () => {
    log.info('######## app running on port ' + PORT + ' ########');
});
