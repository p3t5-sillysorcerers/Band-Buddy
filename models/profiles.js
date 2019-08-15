const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: String, required: true },
  userName: { type: String, required: true },
  instrument: { type: String },
  skillLevel: { type: String },
  musicGenres:[],
  info: { type: String },
  location: { type: String },
  profileLinks: { type: String },
  image: { data: Buffer, contentType: String  },
  updated: { type: Date, default: Date.now }
});

const Profiles = mongoose.model("Profiles", profileSchema);


module.exports = Profiles;
