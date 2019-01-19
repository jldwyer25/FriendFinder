//PSEUDOCODE AND OUTLINE TAKEN FROM HOT RESTAURANT


var friendsArray = require("../data/friends");
var arraySort = require ("array-sort");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });


  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
   var userData=req.body;
   var storedDifference = [];
   var results = 0;

   //outer loop 
    for (var i=0; i < friendsArray.length; i++) {
      for (var j=0; j < friendsArray[i].scores.length; j++){
        results += (parseInt(userData.scores[j]) - parseInt(friendsArray[i].scores[j]));
      }
      storedDifference.push(
      {
        name: friendsArray[i].name,
        pic: friendsArray[i].pic,
        totalDifference: Math.abs(results)
      });
    }
    arraySort(storedDifference, 'totalDifference');

    friendsArray.push(userData);

    return res.json(storedDifference[0]);
  });
};
