const { Product, Color, Photo } = require('../db/models');

module.exports = {
  get: (req, res) => {
    const { inputId } = req.params;
    // console.log('id from controller', id);
    Product.findAll({
      include: [{
        model: Color,
        required: true,
        where: { productId: inputId },
        include: [{
          model: Photo,
          required: true,
        }],
      }],
    }).then((data) => {
      res.status(200).send(data);
      // Color.findAll({ where: })
    })
      .catch(err => console.error(err));
  },
  // post: (req, res) => {
  //   const { name } = req.body;
  //   Todo.create({name})
  //     .then(() => {
  //       res.status(201).send("posted")
  //     })
  //     .catch((err) => console.error(err))
  // },
  // update: (req, res) => {
  //   const {name, newName} = req.body
  //   Todo.update({name: newName}, {where: {name}})
  //     .then(data => {
  //       res.status(202).send('hello from update')
  //     })
  //     .catch(err => console.error(err))
  // },
  // delete: (req, res) => {
  //   const { name } = req.query;
  //   Todo.destroy({
  //     where: {name}
  //   })
  //     .then(data => {
  //       res.status(202).send('deleted');
  //     })
  //     .catch(err => console.error(err))

  // }
};
