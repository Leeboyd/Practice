var express = require ('express'),
    bodyParser = require ('body-parser'),
    mongoose = require ('mongoose');

var Leaders = require ('../models/leadership');

var Verify = require ('./veryify');

var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, callback) {
  Leaders.find({}, function (err, leader){
    if (err) throw err;
    console.log("搜尋所有的leaders");
    res.json(leader);
  });
})

.post(function (req, res, callback) {
  Leaders.create(req.body, function (err, leader){
    if (err) throw err;
    console.log('leader created!');
    var id = leader._id;

    res.writeHead(200, {
      'Content-Type': 'text/plain'
    })
    res.end('Added the leader with id:'+id);
  });
})

.delete(function (req, res, callback){
  Leaders.remove({}, function (err, message){
    if (err) throw err;
    console.log('Deleting all leaders');
    console.log('訊息: '+message);
    res.json(message);
  });
});

leaderRouter.route('/:leaderId')
.get(function (req, res, callback) {
  Leaders.findById(req.params.leaderId, function (err, leader){
    if (err) throw err;
    console.log('Will send details of the leader: '+req.params.leaderId+' to you!');
    res.json(leader);
  });
})

.put(function (req, res, callback) {
  Leaders.findByIdAndUpdate(req.params.leaderId, {
    $set: req.body
  }, {
    new: true
  }, function (err, leader) {
    if (err) throw err;
    console.log('Updating the leader: '+req.params.leaderId+'\n');
    res.json(leader);
  });
})

.delete(function (req, res, callback) {
  Leaders.findByIdAndRemove(req.params.leaderId, function (err, message) {
    if (err) throw err;
    console.log('Deleting leader: '+req.params.leaderId);
    console.log('訊息: '+message);
    res.json(message);
  })
});

module.exports = leaderRouter;
