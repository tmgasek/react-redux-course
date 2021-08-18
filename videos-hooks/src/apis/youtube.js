import axios from 'axios';

const KEY = 'AIzaSyAvMpzHFOd3skqKradDJ_JWzWEWxREWZGg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
