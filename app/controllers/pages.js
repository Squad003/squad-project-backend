'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Page = models.page;

const authenticate = require('./concerns/authenticate');

const create = (req, res, next) => {
  console.log(req.body);
  console.log(req.currentUser);
  let page = Object.assign(req.body.page, {
    _owner: req.currentUser._id,
  });
  // console.log(req.currentUser._id);

  Page.create(page)
    .then(page => res.json({ page }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  console.log(req.params.id);
  Page.findById(req.params.id)
    .then(page => page ? res.json({ page }) : next())
    .catch(err => next(err));
  console.log(res.body);
};

const indexUsersPages = (req, res, next) => {
  let search = { _owner: req.currentUser._id };
  console.log(search);
  Page.find(search)
    .then((pages) => {
      if (!pages) {
        console.log('are we getting here?');
        return next();
      } else {
        console.log('pages ', pages);
        return pages;
      }
    })
    .then(pages => pages ? res.json({ pages }) : next())
    .catch(err => next(err));
};

const indexOthersPages = (req, res, next) => {
  let search = { _owner: req.params.other_user_id };
  console.log('search ', req.params.other_user_id);
  Page.find(search)
    .then((pages) => {
      if (!pages) {
        console.log('are we getting here?');
        return next();
      } else {
        console.log('pages ', pages);
        return pages;
      }
    })
    .then(pages => pages ? res.json({ pages }) : next())
    .catch(err => next(err));
};

const update = (req, res, next) => {
  console.log(req.body);
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  Page.findOne(search)
    .then(page => {
      if (!page) {
        return next();
      }

      console.log(req.body.page);

      delete req.body._owner;  // disallow owner reassignment.
      Page.update(req.body.page);
      return page.update(req.body.page)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id, _owner: req.currentUser._id };
  Page.findOne(search)
    .then(page => {
      if (!page) {
        return next();
      }

      Page.remove();
      return page.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

module.exports = controller({
  create,
  update,
  show,
  destroy,
  indexUsersPages,
  indexOthersPages,
}, { before: [
  { method: authenticate, except: ['indexOthersPages', 'show'] },
], });
