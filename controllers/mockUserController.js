// here's where you'd import your database models if you were using them.
const mongoose = require('mongoose');
const Profiles = mongoose.model('Profiles');

const userController = {
  getAuthenticatedUser: (request, response) => {
    console.log("Authenticated User", request.user);
    response.json(request.user);
    console.log("Data we need" + req.params.userName)
    // db.Profiles
      // .findOne({username: `${req.params.username}`})
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));

  },
  login: (request, response) => {
    console.log("UserController.login", request.user);
    const user = {
        username:  request.user['username'],
        instrument: request.user['instrument'],
        skillLevel: request.user[' skillLevel'],
        musicGenres: request.user['musicGenres'],
        info: request.user['info'],
        location: request.user['location'],
        profileLinks: request.user['profileLinks'],
        image: request.user['image'],
        updated: request.user['updated'],
    }
    response.json(user);
  },
  logout: (request, response) => {
    request.logout();
    response.send("user logged out");
  },
  register: (request, response) => {
    const user = request.body;

    if (!user.username) {
      return response.status(422).json({
        errors: {
          username: "is required"
        }
      });
    }

    if (!user.password) {
      return response.status(422).json({
        errors: {
          password: "is required"
        }
      });
    }
    const finalUser = new Profiles(user);

    finalUser.setPassword(user.password);

    return finalUser.save()
     .then(() => response.json({ user: finalUser.toAuthJSON() })).catch((err) => {
         console.log(err);
       return response.status(400).json({
         errors: {
           userName: 'already exists!',
         },
       });
     });
     
 


  }
};

module.exports = userController;
