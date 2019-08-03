const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: String, required: true },
  instrument: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Profile = mongoose.model("Book", profileSchema);

module.exports = Profile;
