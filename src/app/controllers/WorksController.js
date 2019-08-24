const { Work } = require("../models");

const WorksController = {
  async index(req, res) {
    await Work.findAll()
      .then(cr => res.json(cr))
      .catch(error => res.status(500).send(error));
  },

  async create(req, res) {
    await Work.create(req.body)
      .then(cr => res.json(cr))
      .catch(error => res.status(500).send(error));
  },

  async read(req, res) {
    await Work.findByPk(req.params.id)
      .then(cr => res.json(cr))
      .catch(error => res.status(500).send(error));
  },

  async update(req, res) {
    let oldWork = await Work.findByPk(req.params.id);
    let newWork = Object.assign(oldWork, req.body);
    newWork
      .save()
      .then(newWork => res.json(newWork))
      .catch(error => res.status(500).send(error));
  },

  async delete(req, res) {
    await Work.findByPk(req.params.id)
      .then(std => std.destroy().then(result => res.json(result)))
      .catch(error => res.status(500).send(error));
  }
};

module.exports = WorksController;
