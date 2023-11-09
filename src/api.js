const fetch = require("node-fetch");

const url = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTI3ZThmNDU5N2M5ZDRkZDVmYmM3NDMyMjk3ZTIyYyIsInN1YiI6IjY1NGIzYTBjMjg2NmZhMDBlMWYwZjE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yJ38HDq7Gff1MSfoFYs5tgQjxnzRxCjiI4G7jyAnM4A",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
