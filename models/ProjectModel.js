const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema(
    {
        name: {
            type: String,
            required: 'name cannot be blank'
        },
        description: {
            type: String,
            required: 'desc cannot be blank'
        },
        licenceType: {
            type: String,
            required: 'licence cannot be blank'
        },
        category: {
            type: String,
            required: 'category cannot be blank'
        },
        link: {
            type: String
        },
        email: {
            type: String,
            required: 'email cannot be blank'
        },
        profilesRequired: {
            type: String
        },
        dateStart: {
            type: String
        },
        dateEnd: {
            type: String
        },
        usersInvolved: {
            type: Array
        }
    },
    { collection: 'Projects' }
);

module.exports = mongoose.model('project', projectSchema);