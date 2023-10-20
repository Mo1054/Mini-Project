  // Route handler for web app
  module.exports = function(app) {

    //The Code for contact page goes here
       //Render page
       app.get('/login', function(req, res) {
        res.render('login.ejs');
      });
   
   }