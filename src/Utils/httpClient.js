const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTliNjAxOWE3ZWJiNDA3MDlkODgwMzNhZTUzYTA1NiIsInN1YiI6IjYwZTFmYzRlMjU4ODIzMDA3NDA5MzBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YJfRAnB8zpjTkMdibzr04VSQ3gg2ZHkhPyj-ozwgT_k",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
