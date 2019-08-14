const router = require("express").Router();
const profileController = require("../../controllers/profileController");
const passport = require('passport');
const auth = require('./auth');
const mongoose = require('mongoose');
const Profiles = mongoose.model('Profiles');



// Matches with "/api/profiles"
router.route("/")
  .get(profileController.findAll)
  .post(profileController.create);


  router.post('/register', auth.optional, (req, res, next) => {
    const user = req.body;
  
    if(!user.userName) {
      return res.status(422).json({
        errors: {
          userName: 'is required',
        },
      });
    }
  
    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    const finalUser = new Profiles(user);
  
    finalUser.setPassword(user.password);
  
    return finalUser.save()
      .then(() => res.json({ user: finalUser.toAuthJSON() })).catch((err) => {
        return res.status(400).json({
          errors: {
            userName: 'already exists!',
          },
        });
      });
  });

  router.post('/login', auth.optional, (req, res, next) => {
    const user = req.body;

  
    if(!user.userName) {
      return res.status(422).json({
        errors: {
          userName: 'is required',
        },
      });
    }
  
    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    return passport.authenticate('local', { session: false }, (err, passportUser, info) =>  {
      console.log('Called' , err, passportUser, info );
      if(err) {
        return next(err);
      }
  
      if(passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();
  
        return res.json({ user: user.toAuthJSON() });
      }
  
      return res.status(400).send(info);
    })(req, res, next);
  });

  router.get('/current', auth.required, (req, res, next) => {
    const { payload: { id } } = req;
  
    return Profiles.findById(id)
      .then((user) => {
        if(!user) {
          return res.sendStatus(400);
        }
  
        return res.json({ user: user.toAuthJSON() });
      });
  });

// Matches with "/api/profiles/:id"
  router.route("/:userName")
  .get(profileController.findByUser)
  .put(profileController.update);


  module.exports = router;


