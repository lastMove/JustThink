'use strict';

var express = require('express');
var controller = require('./quote.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/',  auth.isAuthenticated(), controller.create);
router.put('/:id',  auth.isAuthenticated(), controller.update);
router.patch('/:id',  auth.isAuthenticated(), controller.update);
router.post('/:id/comment',  auth.isAuthenticated(), controller.createComment);
router.delete('/:id', controller.destroy);

module.exports = router;