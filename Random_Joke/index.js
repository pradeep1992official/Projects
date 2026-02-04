const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("generate");
const checkbox = document.getElementById("refresh");
const selectBox = document.getElementById("selectbox");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let intervalID;

let getJoke = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      jokeContainer.textContent = data.joke;
    });
};

btn.addEventListener("click", getJoke);
getJoke();

checkbox.addEventListener("change", () => {
  selectBox.hidden = !checkbox.checked;
  selectBox.value = "0";
  if (!checkbox.checked) clearInterval(intervalID);

});

selectBox.addEventListener("change", () => {
  clearInterval(intervalID);

  const timer = parseInt(selectBox.value);

  if (timer) {
    intervalID = setInterval(() => {
      getJoke();
    }, timer);
  }
});
