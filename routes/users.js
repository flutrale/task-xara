const express = require('express');
const router = express.Router();

// Checks if user is Authenticated
const { isAuthenticated } = require('../config/auth');

// Controller for the Like & Unlike feature
const UserController = require('../controllers/UserController');
const User = require('../models/User');


// Wellcome route
router.get('/', (req, res) => {
  res.json({
    message: "Home"
  })
});

// Get user data 
router.get('/:id', 
  UserController.getUser
);

router.get('/me', 
  isAuthenticated,
  UserController.getLoggedInUser
);

// Signup handle
router.post('/signup',
  UserController.createUser 
);

// Login handle
router.post('/login', 
  UserController.login   
);

router.delete('/users', (req, res, next)=>{
  User.deleteMany({ email: /test@test.com/}).then(() =>{
    res.json({
      message: "deleted"
    })
  })
})


  UserService
module.exports = router;