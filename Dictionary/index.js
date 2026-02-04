const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn = document.getElementById("searchBtn");
const result = document.getElementById("result");
const textBox = document.getElementById("searchValue");

btn.addEventListener("click", () => {
  getWord();
});

textBox.addEventListener("input", () => {
  getWord();
});

function getWord() {
  let word = textBox.value;

  if (word.indexOf(" ") !== -1) {
    result.innerHTML = `<h2>Enter Without Spaces</h2> `;
    setTimeout(() => {
      textBox.value = "";
      result.innerHTML = ``;
    },3000);
  }
  else {

    fetch(`${url}${word}`)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
      <div class="output">${word.toUpperCase()}</div>
      <div class="details">
      <p>${data[0].meanings[0].partOfSpeech}</p>
      <p>${data[0].phonetics[1].text}</p>
      </div>
      <p class="meaning">
      ${data[0].meanings[0].definitions[0].definition}
      </p>
      <p class="example">
      ${data[0].meanings[0].definitions[0].example || ""}
      </p>`;
    })
    .catch(() => {
      result.innerHTML = "No Word Found ..!!";
    });
  }
}
