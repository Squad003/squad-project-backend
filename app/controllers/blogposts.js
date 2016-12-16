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

const index = (req, res, next) => {
  console.log(req.body);
  Blogpost.find()
    .then(blogposts => res.json({ blogposts }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  console.log(req.params.id);
  Blogpost.findById(req.params.id)
    .then(blogpost => blogpost ? res.json({ blogpost }) : next())
    .catch(err => next(err));
  console.log(res.body);
};

const update = (req, res, next) => {
  console.log(req.body);
  let search = { _id: req.params.id/*, _owner: req.currentUser._id*/ };
  Blogpost.findOne(search)
    .then(blogpost => {
      if (!blogpost) {
        return next();
      }
      console.log(req.body.blogpost);

      // delete req.body._owner;  // disallow owner reassignment.
      Blogpost.update(req.body.blogpost);
      return blogpost.update(req.body.blogpost)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
    // Blogpost.update(req.body.blogpost);
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id/*, _owner: req.currentUser._id*/ };
  Blogpost.findOne(search)
    .then(blogpost => {
      if (!blogpost) {
        return next();
      }

      Blogpost.remove();
      return blogpost.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

module.exports = controller({
  create,
  index,
  show,
  update,
  destroy,
});
