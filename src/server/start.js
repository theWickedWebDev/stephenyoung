const { app } = require('./index.js');
import Loadable from 'react-loadable';

const { PORT = 3000 } = process.env

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => console.log('######## app running ########'))
});
