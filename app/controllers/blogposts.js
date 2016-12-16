'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Blogpost = models.blogpost;

const create = (req, res, next) => {
  let blogpost = Object.assign(req.body.blogpost);
  // console.log(req.body);

  Blogpost.create(blogpost)
    .then(blogpost => res.json({ blogpost }))
    .catch(err => next(err));
};

module.exports = controller({
  create,
});
