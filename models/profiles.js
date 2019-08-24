const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require('crypto');

const profileSchema = new Schema({
  name: { type: String, required: true},
  username: { type: String, required: true, unique: true },
  hash: { type: String, required: true},
  salt: {type: String, required: true},	  
  instrument: { type: String, required: true},
  skillLevel: { type: String },
  musicGenres:{ type: String },
  info: { type: String },
  location: { type: String },
  profileLinks: { type: String },
  image: { type: String },
  updated: { type: Date, default: Date.now }
});


profileSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

profileSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

profileSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    username: this.username,
    // token: this.generateJWT(),
  };
};

const Profiles = mongoose.model("Profiles", profileSchema);


module.exports = Profiles;
