const userController = require('../controllers/UserController');

module.exports = app => {
  app
    .route('/user')
    .get(userController.getAllUsers)
    .post(userController.createUser);

    app.route('/getUserByEmail').post(userController.getUserByEmail);

  /*app
    .route('/tasks/:taskId')
    .get(taskBuilder.read_a_task)
    .put(taskBuilder.update_a_task)
    .delete(taskBuilder.delete_a_task);*/
};