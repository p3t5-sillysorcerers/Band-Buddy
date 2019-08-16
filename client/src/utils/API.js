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
  inputProfiles: function(profileData) {
    console.log(profileData);
    return axios.post('/api/profiles', profileData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  })
    // return axios.post("/api/profiles", profileData);
  },
  register: function(profileData) {
    console.log(profileData);
    return axios.post('/api/user/register', profileData).then(response => {
      console.log("Response for register" , response)
    })
    
    // return axios.post("/api/profiles", profileData);
  }
};