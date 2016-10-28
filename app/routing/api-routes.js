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
       

        var totalDifference = 0;
        var personIndex = 0;
        friends.users.forEach(function(obj, index) {
            var currentScore = 0;
            // var sum = obj.scores.reduce(function(a, b){
            //     return a + b;

            
            // }, 0);   
            // console.log(index  + " then sum: " + sum);         
            currentScore += Math.abs(newUser.scoreSum - parseInt(obj.scoreSum));
            // 
            console.log("first for each furrent score: ", obj.scoreSum);
            console.log("result of first abs", currentScore);
            if(index == 0){
            	totalDifference = currentScore;
            	personIndex = index;
            }
            if (totalDifference > currentScore) {
                totalDifference = currentScore;
                personIndex = index;
                console.log("In if pscore: ", totalDifference);
            }
        });
        console.log('final score: '+ totalDifference);
        console.log('index winner: '+ personIndex);

         friends.users.push(newUser);
         res.send(friends.users[personIndex]);
        // res.status(201).send();
    });

    // create an image route to get the image  and then pass it into the bootstrap modal
    // app.get('/:photo', function(req, res) {
    //     res.json(friends.users);
    //     console.log(friends.users);
    //     // res.status(201).send();
    // });
}
