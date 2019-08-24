const { Student, Classroom } = require("../models");

const StudentsController = {
  async index(req, res) {
    await Student.findAll()
      .then(std => res.json(std))
      .catch(error => res.status(500).send(error));
  },

  async create(req, res) {
    const cls = await Classroom.findByPk(req.body.classroomId);
    if (cls) {
      await Student.create(req.body)
        .then(std => res.status(201).json(std))
        .catch(error => res.status(500).send(error));
    } else {
      return res.status(404).send(`Could not find classroom of id ${req.body.classroomId}`);
    }
  },

  async read(req, res) {
    await Student.findByPk(req.params.id)
      .then(std => res.json(std))
      .catch(error => res.status(500).send(error));
  },

  async update(req, res) {
    let oldStudent = await Student.findByPk(req.params.id);
    let newStudent = Object.assign(oldStudent, req.body);
    newStudent
      .save()
      .then(newStudent => res.json(newStudent))
      .catch(error => res.status(500).send(error));
  },

  async delete(req, res) {
    await Student.findByPk(req.params.id)
      .then(std => std.destroy().then(result => res.json(result)))
      .catch(error => res.status(500).send(error));
  }
};

module.exports = StudentsController;
