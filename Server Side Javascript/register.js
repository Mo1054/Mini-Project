  // Route handler for web app
  module.exports = function(app) {

    //The Code for contact page goes here
       //Render page
       app.get('/register', function(req, res) {
        res.render('register.ejs');
      });
   
   }