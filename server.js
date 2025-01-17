const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')

const PORT = 3000;

const userRoutes = require('./routes/user');


//local imports
const connectDb = require('./db')
const productoutes = require('./controllers/product.controller')

// Import the user controller
const userController = require('./controllers/user.controller');

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname)));
app.use(express.static("uploads"))
//routing
app.use('/products', productoutes)

//configure view engine
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
  extname: "hbs",//index.hbs
  layoutsDir: path.join(__dirname, 'views/layouts'),
  defaultLayout: 'mainLayout.hbs'
}))
app.set('view engine', '.hbs')


// Serve the signup page
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/layouts', 'signup.html'));
});

// Serve the login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/layouts', 'login.html'));
});

// Use the controller to handle the signup form submission
//app.post('/signup', userController.registerUser);


// app.use('/new', productoutes)

//configure view engine
// app.set('views', path.join(__dirname, 'views'))
// app.engine('.hbs', engine({
//   extname: "hbs",//index.hbs
//   layoutsDir: path.join(__dirname, 'views/layouts'),
//   defaultLayout: 'shop.hbs'
// }))
// app.set('view engine', '.hbs')

// app.get('/shop', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views/layouts/shop.hbs'));
// });



connectDb()
  .then(data => {
    console.log('db connection succeeded.');
    app.listen(3000, () => {
      console.log('server started at 3000.');
    }).on('error', err =>
      console.log('server ignition failed:\n', err))
  })
  .catch(err => console.log('error in connecting db\n:', err))


  // MongoDB connection
mongoose.connect('mongodb+srv://s220194805:nC0IFkpgBCS1fp0q@cluster0.k3wz2.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log('MongoDB connection error:', err));
