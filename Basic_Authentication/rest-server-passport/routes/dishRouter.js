var express = require ('express'),
    bodyParser = require ('body-parser'),
    mongoose = require ('mongoose');

var Dishes = require('../models/dishes');

var Verify = require('./verify');

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

// dishRouter.route('/')
dishRouter.route('/')
.get(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, callback) {
  Dishes.find({}, function (err, dish){
    if (err) throw err;
    console.log("搜尋所有的dishes");
    res.json(dish);
  });
})

.post(Verify.verifyOrdinaryUser, function (req, res, callback) {
  Dishes.create(req.body, function (err, dish){
    if (err) throw err;
    console.log('Dish created!');
    var id = dish._id;

    res.writeHead(200, {
      'Content-Type': 'text/plain'
    })
    res.end('Added the dish with id: '+id);
  });
})

.delete(Verify.verifyOrdinaryUser, function (req, res, callback){
  Dishes.remove({}, function (err, message){
    if (err) throw err;
    res.json(message);
  });
});

//dishRouter.route('/:dishId')
dishRouter.route('/:dishId')
.get(function (req, res, callback) {
  Dishes.findById(req.params.dishId, function (err, dish){
    if (err) throw err;
    console.log("搜尋Id: "+req.params.dishId);
    res.json(dish);
  });
})

.put(function (req, res, callback) {
  Dishes.findByIdAndUpdate(req.params.dishId, {
    $set: req.body
  }, {
    new: true
  }, function (err, dish) {
    if (err) throw err;
    console.log("更新Id: "+req.params.dishId+" 的dish內容");
    res.json(dish);
  })
})

.delete(function (req, res, callback) {
  Dishes.findByIdAndRemove(req.params.dishId, function (err, resp) {
    if (err) throw err;
    res.json(resp);
  })
});

//dishRouter.route('/:dishId/comments')
dishRouter.route('/:dishId/comments')
.get(function (req, res, callback) {
  Dishes.findById(req.params.dishId, function (err, dish) {
    if (err) throw err;
    console.log("搜尋Id: "+req.params.dishId+ " 的所有comments");
    res.json(dish.comments);
  })
})

.post(function (req, res, callback) {
  Dishes.findById(req.params.dishId, function (err, dish) {
    if (err) throw err;
    dish.comments.push(req.body);
    dish.save(function (err, dish) {
      if (err) throw err;
      console.log('Updated Comments!');
      res.json(dish);
    })
  })
})

.delete(function (req, res, callback) {
  Dishes.findById(req.params.dishId, function (err, dish) {
    if (err) throw err;
    for (var i = (dish.comments.length - 1); i >= 0; i--) {
      dish.comments.id(dish.comments[i]._id).remove();
    }
    dish.save(function (err, result) {
      if (err) throw err;
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.end('Deleted all comments!');
    });
  });
})

//dishRouter.route('/:dishId/comments/:commentId')
dishRouter.route('/:dishId/comments/:commentId')
.get(function (req, res, callback) {
  Dishes.findById(req.params.dishId, function (err, dish) {
    if (err) throw err;
    res.json(dish.comments.id(req.params.commentId));
  })
})
.put(function (req, res, callback) {
  // We delete the existing commment and insert the updated
  // comment as a new comment
  Dishes.findById(req.params.dishId, function (err, dish) {
    if (err) throw err;
    dish.comments.id(req.params.commentId).remove();
    dish.comments.push(req.body);
    dish.save(function (err, dish) {
      if (err) throw err;
      console.log('更新了特定 Comments!');
      res.json(dish);
    })
  })
})
.delete(function (req, res, callback) {
  Dishes.findById(req.params.dishId, function (err, dish) {
    dish.comments.id(req.params.commentId).remove();
    dish.save(function (err, resp) {
      if (err) throw err;
      res.json(resp);
    })
  })
})
module.exports = dishRouter;
