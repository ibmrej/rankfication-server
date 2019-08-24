const { Classroom } = require("../models");

const ClassroomsController = {
  async index(req, res) {
    await Classroom.findAll()
      .then(cr => res.json(cr))
      .catch(error => res.status(500).send(error));
  },

  async create(req, res) {
    await Classroom.create(req.body)
      .then(cr => res.json(cr))
      .catch(error => res.status(500).send(error));
  },

  async read(req, res) {
    await Classroom.findByPk(req.params.id)
      .then(cr => res.json(cr))
      .catch(error => res.status(500).send(error));
  },

  async update(req, res) {
    let oldCr = await Classroom.findByPk(req.params.id);
    let newCr = Object.assign(oldCr, req.body);
    newCr
      .save()
      .then(newCr => res.json(newCr))
      .catch(error => res.status(500).send(error));
  },

  async delete(req, res) {
    await Classroom.findByPk(req.params.id)
      .then(std => std.destroy().then(result => res.json(result)))
      .catch(error => res.status(500).send(error));
  }
};

module.exports = ClassroomsController;
