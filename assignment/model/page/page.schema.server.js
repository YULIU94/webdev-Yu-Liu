var mongoose = require('mongoose');

var PageSchema = mongoose.Schema({
  websiteId: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
  // websiteId: String,
  name: String,
  // populate user here
  title: String,
  description: String,
  widgets: [],
  // widgets:[{type: mongoose.Schema.Types.ObjectId, ref: 'Widget'}],
  dateCreated: Date
}, {collection: 'page'});

module.exports = PageSchema;
