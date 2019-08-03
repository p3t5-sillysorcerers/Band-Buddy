const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/musicAppDB"
);

const profileSeed = [
  {
    name: "Kevin Passaglia",
    userName: "KPizzle",
    instrument: "Sax",
    skillLevel: "Expert",
    musicGenres:["Heavy Metal","Yacht Rock","Dub"],
    image: "N/A",
    info: "combo well with killer jaz flute players",
    location: "Chicago",
    profileLinks: "tbd",
    updated: new Date(Date.now())
  },
  {
    name: "Conor Perez",
    userName: "CPizzle",
    instrument: "drums",
    skillLevel: "Expert",
    musicGenres:["Yacht Rock","Dub"],
    image: "N/A",
    info: "like to jam",
    location: "Chicago",
    profileLinks: "tbd",
    updated: new Date(Date.now())
  },
  {
    name: "Phil Dugliss",
    userName: "PDizzle",
    instrument: "guitar",
    skillLevel: "Expert",
    musicGenres:["Heavy Metal","Yacht Rock"],
    image: "N/A",
    info: "more cowbell!",
    location: "Chicago",
    profileLinks: "tbd",
    updated: new Date(Date.now())
  },
  {
    name: "Dan Longo",
    userName: "DLizzo",
    instrument: "bass",
    skillLevel: "Expert",
    musicGenres:["Heavy Metal","Yacht Rock","Jazz"],
    image: "N/A",
    info: "funkadelic",
    location: "Chicago",
    profileLinks: "tbd",
    updated: new Date(Date.now())
  }
];

db.Profiles
  .remove({})
  .then(() => db.Profiles.collection.insertMany(profileSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
