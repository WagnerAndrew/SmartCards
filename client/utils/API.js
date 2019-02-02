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
  
  saveCard: function(bookData) {
    return axios.post("/api/cards", cardData);
  }
};
