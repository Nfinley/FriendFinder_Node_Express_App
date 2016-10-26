// api-routes.js File. Created by Nigel Finley for the UT Coding Bootcamp. 
// Purpose: houses a get and post route for the api/friends directory
// 

var friends = require('../data/friends');


module.exports = function(app) {



    app.get('/api/friends', function(req, res) {
        res.json(friends.users);
        console.log(friends.users);
        // res.status(201).send();
    });
    // This takes in the survey html and pushes it to the friends object
    // Add the logic here to handle the  compatibility logic. 
    app.post('/survey', function(req, res) {
        var newUser = req.body;

        // pushing to the array in order view with the api/friends
        friends.users.push(newUser);

        var prevScore = 0;
        var personIndex = 0;
        friends.users.forEach(function(obj, index) {

            var currentScore = 0;
            obj.scores.forEach(function(score) {
                currentScore += Math.abs(newUser.scores[index] - score);
                console.log("Current Score: " + currentScore, "Current Index: " + index);

            });
            if(index == 0){
            	prevScore = currentScore;
            	personIndex = index;
            }
            if (prevScore > currentScore) {
                prevScore = currentScore;
                personIndex = index;
                console.log("pscore: ", prevScore, "pI: ", personIndex);
            }
        })
        console.log('final score: '+ prevScore);
        console.log('final index: '+ personIndex);

        res.status(201).send();
    });

}
