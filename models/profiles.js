const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: String, required: true },
  userName: { type: String, required: true },
  instrument: { type: String, required: true },
  skillLevel: { type: String, required: true },
  musicGenres:[],
  image: { type: String, required: true },
  info: { type: String, required: true },
  location: { type: String, required: true },
  profileLinks: { type: String, required: true },
  updated: { type: Date, default: Date.now },
});

const Profiles = mongoose.model("Profiles", profileSchema);

module.exports = Profiles;
