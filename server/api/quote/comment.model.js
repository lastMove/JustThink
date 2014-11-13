'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
	text : String,
 	created: {type: Date, default: Date.now()},
  	updated: {type: Date, default: Date.now()},
  	user: {type:Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Comment', CommentSchema);