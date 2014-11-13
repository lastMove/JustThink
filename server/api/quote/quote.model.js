'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var QuoteSchema = new Schema({
  text: String,
  created: {type: Date, default: Date.now()},
  updated: [{type: Date, default: Date.now()}],
  user: {type: Schema.ObjectId, ref: 'User'},
  Likers: [{type: Schema.ObjectId, ref: 'User'}],
  favoreds: [{type: Schema.ObjectId, ref: 'User'}],
  comments :[{type: Schema.ObjectId, ref : 'Comment'}],
  author: String,

  tags : [String]
});


QuoteSchema.pre('save', function(next, done){
  if (this.isNew)
    this.created = Date.now();

  this.updated.push(Date.now());
  next();
});


module.exports = mongoose.model('Quote', QuoteSchema);