import axios from "axios";

export default {
  
  getCards: function() {
    return axios.get("/api/cards");
  },
  
  getCard: function(id) {
    return axios.get("/api/cards/" + id);
  },

  deleteCard: function(id) {
    return axios.delete("/api/cards/" + id);
  },
  
  saveCard: function(cardData) {
    return axios.post("/api/cards", cardData);
  },

  getLibraries: function() {
    return axios.get("/api/libraries");
  },
  
  getLibrary: function(id) {
    return axios.get("/api/libraries/" + id);
  },

  deleteLibrary: function(id) {
    return axios.delete("/api/libraries/" + id);
  },
  
  saveLibrary: function(libraryData) {
    return axios.post("/api/libraries", libraryData);
  }


};
