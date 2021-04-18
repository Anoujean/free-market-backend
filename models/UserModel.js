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
      required: 'password cannot be blank'
    },
    lastname: {
      type: String,
      required: 'lastname cannot be blank'
    },
    firstname: {
      type: String,
      required: 'firstname cannot be blank'
    },
    address: {
      type: String,
      required: 'lastname cannot be blank'
    },
    zipcode: {
      type: String,
      required: 'lastname cannot be blank'
    },
    city: {
      type: String,
      required: 'lastname cannot be blank'
    },
  },
  { collection: 'Users' }
);

module.exports = mongoose.model('user', userSchema);

/**
 * Collections:
Users (id, firstname, lastname, email, login, password, address, zipCode, city, role, projects: [idProject, role])
Projects (id, name, description, licenceType, category1, email, links[link, smallDescription], profilesRequired[], isOpen, dateStart, dateEnd)
Profiles (id, name, categories[])
Contact (id, UserId, object,  message)

 */