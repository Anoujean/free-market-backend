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
        email: {
            type: String,
            required: 'email cannot be blank'
        },
        links: {
            type: Array
        },
        profilesRequired: {
            type: Array
        },
        isOpen: {
            type: Boolean,
            required: 'cannot be blank'
        },
        dateStart: {
            type: Date
        },
        dateEnd: {
            type: Date
        }
    },
    { collection: 'Projects' }
);

module.exports = mongoose.model('project', projectSchema);