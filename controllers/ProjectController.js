const mongoose = require('mongoose');
const project = mongoose.model('project');

exports.getAllProject = (req, res) => {
    project.find({}, (err, projects) => {
        if (err) res.send(err);
        res.json(projects);
    });
};

exports.createProject = (req, res) => {
    const newProject = new project(req.body);
    newProject.save((err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
};

exports.getProject = (req, res) => {
    project.findById(req.params.projectId, (err, user) => {
        if (err) res.send(err);
        res.json(user);
    });
};

exports.updateProject = (req, res) => {
    project.findOneAndUpdate(
        { _id: req.params.projectId },
        req.body,
        { new: true },
        (err, project) => {
            if (err) res.send(err);
            res.json(project);
        }
    );
};

exports.deleteProject = (req, res) => {
    project.deleteOne({ _id: req.params.projectId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'project successfully deleted',
            _id: req.params.projectId
        });
    });
};