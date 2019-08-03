import axios from "axios";

export default {
  // Gets all profiles
  getProfiles: function() {
    return axios.get("/api/profiles");
  },
  // Gets the profiles with the given id
  getProfiles: function(id) {
    return axios.get("/api/profiles/" + id);
  },
  // Deletes the profiles with the given id
  deleteProfiles: function(id) {
    return axios.delete("/api/profiles/" + id);
  },
  // Saves a profiles to the database
  saveProfiles: function(profileData) {
    return axios.post("/api/profiles", profileData);
  }
};