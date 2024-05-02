export const API_KEY = "AIzaSyCNWMWrI0nj42pDurzl92MZCNG-t7z_RKY";

export const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  KEY;

export const SEARCH_SUGGESSTIONS =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// console.log(key);
