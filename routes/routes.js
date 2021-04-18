const userController = require('../controllers/UserController');
const projectController = require('../controllers/ProjectController');

module.exports = app => {
  app.route('/addUser').post(userController.createUser);

  app.route('/getUserByEmail').post(userController.getUserByEmail);

  app.route('/getUserByUserId').post(userController.getUser);

    app.route('/project').post(projectController.createProject);

  /*app
    .route('/tasks/:taskId')
    .get(taskBuilder.read_a_task)
    .put(taskBuilder.update_a_task)
    .delete(taskBuilder.delete_a_task);*/
};