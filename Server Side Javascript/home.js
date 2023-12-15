// Route handler for web app
module.exports = function (app) {
  //The Code for contact page goes here
  //Render page
  app.get("/", async function (req, res) {
    const data = await dbQuery("SELECT * FROM games");
    res.render("home.ejs", {
      user: req.session?.user,
      data,
      auth: req.query.auth,
    });
  });
};
