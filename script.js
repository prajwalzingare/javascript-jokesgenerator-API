// joke section container
let jokeSection = document.querySelector("#joke");
// generate joke button
let generateBtn = document.querySelector("#jokeBtn");
// method

let API =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function acquireJoke() {
  // fetch joke from the API
  fetch(API)
    .then((info) => info.json())
    .then((item) => {
      jokeSection.textContent = `${item.joke}`;
    });
}

generateBtn.addEventListener("click", acquireJoke);
