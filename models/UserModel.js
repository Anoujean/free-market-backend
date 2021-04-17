const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: 'email cannot be blank'
    },
    password: {
      type: String,
      required: 'email  cannot be blank'
    }
  },
  { collection: 'Users' }
);

module.exports = mongoose.model('user', userSchema);