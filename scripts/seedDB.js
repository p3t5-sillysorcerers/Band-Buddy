const mongoose = require("mongoose");
const db = require("../models");

// This file empties the profiles collection and inserts the profiles below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://heroku_bdq0hmmf:ufc9jh2h6453oc1qfa50i7ea5m@ds259347.mlab.com:59347/heroku_bdq0hmmf"
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
