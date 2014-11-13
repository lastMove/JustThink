'use strict';

var _ = require('lodash');
var Quote = require('./quote.model');
var Comment =require('./comment.model')
// Get list of quotes
exports.index = function(req, res) {
  Quote.find(function (err, quotes) {
    if(err) { return handleError(res, err); }
    return res.json(200, quotes);
  });
};

// Get a single quote
exports.show = function(req, res) {
  Quote.findById(req.params.id, function (err, quote) {
    if(err) { return handleError(res, err); }
    if(!quote) { return res.send(404); }
    return res.json(quote);
  });
};

// Creates a new quote in the DB.
exports.create = function(req, res) {
  quote = req.body;
  quote.user = req.user;
  Quote.create(quote, function(err, quote) {
    if(err) { return handleError(res, err); }
    return res.json(201, quote);
  });
};  

// Updates an existing quote in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Quote.findById(req.params.id, function (err, quote) {
    if (err) { return handleError(res, err); }
    if(!quote) { return res.send(404); }
    if (req.user.name !== quote.user.name)
      return res.send(403);
    var updated = _.merge(quote, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, quote);
    });
  });
};

// Deletes a quote from the DB.
exports.destroy = function(req, res) {
  Quote.findById(req.params.id, function (err, quote) {
    if(err) { return handleError(res, err); }
    if(!quote) { return res.send(404); }
    quote.remove(function(err) {
    if (req.user.name !== quote.user.name)
      return res.send(403);
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

/* ==================== COMMENTS OBJECTS ========================== */

// COMMENT

exports.createComment = function(req, res)
{
    Quote.findById(req.params.id, function (err, quote)
    {
      if(err) { return handleError(res, err); }
      if(!quote) { return res.send(404); }
      Comment.create(req.body, function(err, comment)
      {
          if (err) {return handleError(res, err);}
          return res.json(201, comment);
      })
  });
};



function handleError(res, err) {
  return res.send(500, err);
}