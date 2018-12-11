const mongoose = require('mongoose');

mongoose.connect('mongodb://juanne:34310065@cluster0-shard-00-00-ciq0e.mongodb.net:27017,cluster0-shard-00-01-ciq0e.mongodb.net:27017,cluster0-shard-00-02-ciq0e.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'); // connect to our database
mongoose.Promise = global.Promise;

module.exports = {
  User: require('../routes/users/users.model'),
  Deck: require('../routes/decks/decks.model'),
  Result: require('../routes/results/results.model')
}