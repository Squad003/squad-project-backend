'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Blogpost = models.blogpost;

const authenticate = require('./concerns/authenticate');

const create = (req, res, next) => {
  let blogpost = Object.assign(req.body.blogpost, {
    _owner: req.currentUser._id,
  });

  Blogpost.create(blogpost)
    .then(blogpost => res.json({ blogpost }))
    .catch(err => next(err));
};

const index = (req, res, next) => {
  // console.log(req.body);
  Blogpost.find()
    .then(blogposts => res.json({ blogposts }))
    .catch(err => next(err));
};

const indexUserBp = (req, res, next) => {
  let search = { _owner: req.currentUser._id };
  console.log('search indexUserBp ', search);

  Blogpost.find(search)
    .then((blogposts) => {
      if (!blogposts) {
        // console.log('are we getting here?');
        return next();
      } else {
        // console.log('blog posts ', blogposts);
        return blogposts;
      }
    })
    .then(blogposts => blogposts ? res.json({ blogposts }) : next())
    .catch(err => next(err));
};

const indexOthersPosts = (req, res, next) => {
  let search = { _owner: req.params.other_user_id };
  console.log('search in others', req.params.other_user_id);
  Blogpost.find(search)
    .then((blogposts) => {
      if (!blogposts) {
        // console.log('are we getting here?');
        return next();
      } else {
        // console.log('blogposts ', blogposts);
        return blogposts;
      }
    })
    .then(blogposts => blogposts ? res.json({ blogposts }) : next())
    .catch(err => next(err));
};

const show = (req, res, next) => {
  // console.log(req.params.id);
  Blogpost.findById(req.params.id)
    .then(blogpost => blogpost ? res.json({ blogpost }) : next())
    .catch(err => next(err));
  // console.log(res.body);
};

const update = (req, res, next) => {
  // console.log(req.body);
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  Blogpost.findOne(search)
    .then(blogpost => {
      if (!blogpost) {
        return next();
      }

      // console.log(req.body.blogpost);

      delete req.body._owner;  // disallow owner reassignment.
      Blogpost.update(req.body.blogpost);
      return blogpost.update(req.body.blogpost)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
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

const searchPosts = (req, res, next) => {
  console.log('in search ', req.query.blogpost.title);

  // query contains the title which we are searching for.
  let query = req.query.blogpost.title;

  // define a regular expression where query is the pattern
  // we are searching for
  // 'i' indicates that we are ignoring case.
  let regex = new RegExp(query, 'i');

  // Find in Blogpost collection for the title that has the regular
  // expression that we are searching for, and return it as json.
  Blogpost.find({title:regex})
    .then(blogposts => res.json({ blogposts }))
    .catch(err => next(err));
};

module.exports = controller({
  create,
  index,
  indexUserBp,
  indexOthersPosts,
  show,
  update,
  destroy,
  searchPosts,
}, { before: [
  { method: authenticate, except: ['index', 'show', 'indexOthersPosts', 'searchPosts'] },
], });
