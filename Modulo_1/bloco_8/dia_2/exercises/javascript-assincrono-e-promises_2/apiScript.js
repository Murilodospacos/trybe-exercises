// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObj = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }
  fetch(API_URL, myObj)
    .then((response) => response.json())
    .then((json) => document.querySelector('#jokeContainer').innerText = json.joke)
};

window.onload = () => fetchJoke();