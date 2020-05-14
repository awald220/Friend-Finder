// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

var path = require("path");

// export the routes for the html pages

module.exports = function(app) {
    
    // Default survey Page
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname +'/../public/survey.html'));
    });


    // path to the home page
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
      });
  

};



