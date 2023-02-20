const API = "https://api.themoviedb.org/3";
export function get(path) {
    return fetch(API + path, {
      headers:{
        Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGZiMjAxZGQ0YjExN2UwOGNjNzllNzMxOWYzNTk3ZSIsInN1YiI6IjYxNDQ2ZDlmMGNkMzJhMDA4ZDg5ZmRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrjnRJ3UJdA_mTZxPQ-dOwW74CVqbrL0ni7k5mBEV5g",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then(result => result.json());
}