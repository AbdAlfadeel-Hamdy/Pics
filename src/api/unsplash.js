import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID h4dZIYM9Fu-stlRQGDeIIMYUKdJ7iw0iDGp1tdcrRlI",
  },
});
