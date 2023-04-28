import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },

  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "01e03b1dcemshab7178f1513d49cp1c27e8jsnad86b7754a35",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};
