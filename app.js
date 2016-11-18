// import the language driver
var MongoClient = require('mongodb').MongoClient
,	assert = require('assert')
,	ObjectID = require('mongodb').ObjectID;

// Connection string
var url = 'mongodb://127.0.0.1:27017/'
,	database = 'test'
,	collection = 'bank_data';

// Use connecto method to connecto to the Server
MongoClient.connect(url+database, function(err, db) {

	// ensure we've connected
	assert.equal(null, err);

	console.log("Connected correctly to server");

	var bankData = db.collection(collection);

	bankData.insert({
	    first_name: "Steven",
	    last_name: "Edouard",
	    accounts: [{
	        account_balance: "50000000",
	        account_type: "Investment",
	        currency: "USD"
	    }]
  	}, function(err, result) {
  		if(err) {
  			return console.error(err);
  		}
  		console.log('inserted: ');
  		console.log(result);
  		return console.log('inserted ' + result.length + ' docs');
  	});

  	console.log("Document inserted");

	// Close the data base connection
	return db.close();
});