import HttpApp from './src/index.js';

const app = new HttpApp.Application();

app.on('request', console.log, app);
app.on('ready', () => {
  console.log('Server is running! :D');
});

app.get('/', async(req, res) => {
  res.send('oi');
});

app.listen(3333);