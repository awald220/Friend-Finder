var path = require("path");

var friends = require("../data/friends");

module.exports = function(app){

    // get request for the list of friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    // post for a new friend
    app.post("/api/friends", function(req, res){
        var newScores = req.body;
        var scoresArr = [];
        var friendCount = 0;
        var bestMatch = 0;

        //runs through current friends list
        for(var i = 0; i < friends.length; i++){
            var scoreDiff = 0;

            //compares friends
            for(var j = 0; j < newScores.length; j++){
                scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newScores[j])));
            }
        
            //push the scores to the array
            scoresArr.push(scoreDiff);
        }

        //find the best match
        for(var i = 0; scoresArray.length; i++){
            if(scoresArr[i] <= scoresArr[bestMatch]){
                bestMatch = i;
            }
        }

        //return the best match
        var bestFriend = friends[bestMatch];
        res.json(bestFriend);

        //send the new submit to the friendsArr
        friends.push(req.body);
    });
};