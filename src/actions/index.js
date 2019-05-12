import axios from 'axios';

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = "AIzaSyAyT_v-ylHRSdnDWbPVzYeK2PWboB4N6WQ";

export function fetchTube(term) {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };

  const request = axios.get(YOUTUBE_URL, { params: params });

  return {
    type: "fetch",
    payload: request
  };
}
