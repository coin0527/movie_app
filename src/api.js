const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-KR";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTI3ZThmNDU5N2M5ZDRkZDVmYmM3NDMyMjk3ZTIyYyIsInN1YiI6IjY1NGIzYTBjMjg2NmZhMDBlMWYwZjE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yJ38HDq7Gff1MSfoFYs5tgQjxnzRxCjiI4G7jyAnM4A",
  },
};

export const nowPlaying = fetch(nowPlayingUrl, options).then((res) =>
  res.json()
);
