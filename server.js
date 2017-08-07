//requires
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const models = require('./models/');

//instance
const app = express();
nunjucks.configure('views', { noChache: true });
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('method-override')('_method'));
// app.use('/wiki', require('./routes/wiki'));
// app.use('/users', require('./routes/users'));
app.use(express.static(path.join(__dirname, './public')));

//index
app.get('/', (req, res, next) => {
  res.send('hello world!');
});

//port and sync
const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log(`Listening on port ${port}`);
})
