// Service
const UserService = require('../services/UserService')

module.exports = {
  createUser: async function (req, res) {
    const { user_name, email, password } = req.body; 
    if(user_name && email && password){
      const response  = await UserService.createNewUser(user_name, email, password);
      res.status(response.status).json(response);
    } else {
      res.status(400).json({
        message: 'Bad request'
      })
    }
  },
  login: async function (req, res) {
    const { user_name, password } = req.body; 
    if(user_name && password){
      const response  = await UserService.userLogin(user_name, password);
      res.status(response.status).json(response);
    } else {
      res.status(400).json({
        message: 'Bad request'
      })
    }
  },
  getLoggedInUser: async function (req, res) {
    if(req.token){
      const response  = await UserService.getUserByToken(req.token);
      res.status(response.status).json(response);
    } else {
      res.status(400).json({
        message: 'Bad request'
      })
    }
  },
  getUser: async function (req, res) {
    if(req.params.id){
      const response  = await UserService.getUserByID(req.params.id);
      res.status(response.status).json(response);
    } else {
      res.status(400).json({
        message: 'Bad request'
      })
    }
  }
}
