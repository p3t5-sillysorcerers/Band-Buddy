const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const Profile = mongoose.model("Profiles");

passport.use(
  new LocalStrategy(
    {
      usernameField: "userName",
      passwordField: "password"
    },
    (userName, password, done) => {
      Profile.findOne({ userName })
        .then(profile => {
          if (!profile || !profile.validatePassword(password)) {
            return done(null, false, {
              errors: { "User Name or password": "is invalid" }
            });
          }
          return done(null, profile);
        })
        .catch(done);
    }
  )
);
