const userController = require('../controllers/UserController');
const projectController = require('../controllers/ProjectController');

module.exports = app => {
  app.route('/addUser').post(userController.createUser);

  app.route('/getUserByEmail').post(userController.getUserByEmail);

  app.route('/getUserByUserId').post(userController.getUser);

  app.route('/addProject').post(projectController.createProject);

  app.route('/getAllProjects').get(projectController.getAllProject);

  app.route('/getProjectById').post(projectController.getProject);

  app.route('/modifyUser').post(userController.updateUser);

};