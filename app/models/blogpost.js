'use strict';

const mongoose = require('mongoose');

const blogpostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

const Blogpost = mongoose.model('Blogpost', blogpostSchema);

module.exports = Blogpost;
