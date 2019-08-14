const mongoose = require("mongoose");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: String},
  hash: { type: String, required: true},
  salt: {type: String, required: true},
  userName: { type: String, required: true, unique: true },
  instrument: { type: String },
  skillLevel: { type: String },
  musicGenres:[],
  info: { type: String },
  location: { type: String },
  profileLinks: { type: String },
  image: { data: Buffer, contentType: String  },
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

profileSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    userName: this.userName,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, '67e1f543-e640-4bc1-8279-9f4f10da1f35');
}

profileSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    userName: this.userName,
    token: this.generateJWT(),
  };
};



const Profiles = mongoose.model("Profiles", profileSchema);


module.exports = Profiles;
