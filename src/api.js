const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-KR";
const popularUrl = baseUrl + "movie/popular" + "?language=ko-KR";
const topRatedUrl = baseUrl + "movie/top_rated" + "?language=ko-KR";
const upcommingUrl = baseUrl + "movie/upcoming" + "?language=ko-KR";

const url = ({ urlName }) => {
  return baseUrl + `${urlName}` + "?language=ko-KR";
};
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTI3ZThmNDU5N2M5ZDRkZDVmYmM3NDMyMjk3ZTIyYyIsInN1YiI6IjY1NGIzYTBjMjg2NmZhMDBlMWYwZjE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yJ38HDq7Gff1MSfoFYs5tgQjxnzRxCjiI4G7jyAnM4A",
  },
};
// ------------------------HOME------------------------------
export const nowPlaying = () =>
  fetch(nowPlayingUrl, options).then((res) => res.json());

export const popular = () =>
  fetch(popularUrl, options).then((res) => res.json());

export const topRate = () =>
  fetch(topRatedUrl, options).then((res) => res.json());

export const upcomming = () =>
  fetch(upcommingUrl, options).then((res) => res.json());
// -----------------------DETAIL------------------------------

export const MovieDetail = (id) => {
  const detailUrl = baseUrl + `movie/${id}` + "?language=ko-KR";
  return fetch(detailUrl, options).then((res) => res.json());
};
// ----------------------Search------------------------------

export const MovieSearch = () => {
  const SearchUrl = baseUrl + `search/movie` + "?language=ko-KR";
  return fetch(SearchUrl, options).then((res) => res.json());
};
