let txtInput = document.querySelector("#input");
let txtOutput = document.querySelector("#output");
let btnTranslate = document.querySelector("btn-translate");

let serverURL = "https://api.funtranslations.com/translate/sith.json";

function constructURL(){
  return serverURL + "?" + "text=" + txtInput.value;
}

fetch(constructURL())
.then(response => response.json())
.then(json => console.log(json))