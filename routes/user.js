// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/user.controller');

// // Route to render the signup form
// router.get('/signup', userController.showRegisterForm);

// // Route to handle form submission and register a new user
// router.post('/signup', userController.registerUser);

// module.exports = router;

// // // Route for displaying the registration form (if you have one)
// // router.get('signup', (req, res) => {
// //   res.render('views/layouts/signup');  // Assuming you have a 'register' view in the users folder
// // });

// // // Route for adding a new user (register)
// // router.post('/signup', (req, res) => {
// //   const { email, firstName, lastName, password } = req.body;

// //   const newUser = new User({
// //     email,
// //     firstName,
// //     lastName,
// //     password,
// //   });

// //   newUser.save((err) => {
// //     if (err) {
// //       console.log('Error saving user:', err);
// //       res.send('Error registering user.');
// //     } else {
// //       res.send('User successfully registered!');
// //     }
// //   });
// // });

// // module.exports = router;
