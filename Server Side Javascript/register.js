const bcrypt = require("bcryptjs");

module.exports = function (app) {
  //The Code for contact page goes here
  //Render page
  app.get("/register", function (req, res) {
    const { error } = req.query;
    res.render("register.ejs", { error, user: req.session?.user });
  });

  app.post("/register", async function (req, res) {
    const { first_name, last_name, username, email, password, c_password } =
      req.body;

    if (password !== c_password) {
      return res.redirect("/register?error=Passwords do not match");
    }

    let data = await dbQuery("SELECT * FROM users WHERE email = ?", [email]);
    if (data?.length > 0) {
      return res.redirect("/register?error=Email already taken");
    }
    data = await dbQuery("SELECT * FROM users WHERE username = ?", [username]);
    if (data?.length > 0) {
      return res.redirect("/register?error=Username already taken");
    }

    const hashedPassword = await hashPassword(password);

    const user = await dbQuery("INSERT INTO users SET ?", {
      first_name,
      last_name,
      username,
      email,
      password: hashedPassword,
    });
    if (user.insertId) {
      req.session.user = user.insertId;
      res.redirect("/");
    } else {
      res.redirect("/register");
    }
  });

  const hashPassword = async (password) => {
    return await bcrypt.hash(password, 8);
  };
};
