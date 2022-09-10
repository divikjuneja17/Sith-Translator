let txtInput = document.querySelector("#input");
let txtOutput = document.querySelector("#output");
let btnTranslate = document.querySelector("#btn-translate");

let serverURL = "https://api.funtranslations.com/translate/sith.json";

// let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function constructURL(){
  return serverURL + "?" + "text=" + txtInput.value;
}

function errorHandler(error) {
    alert("Error has occured. Try again after some time!")
    console.log(error);
}
function clickHandler(){
    fetch(constructURL())
    .then(response => response.json())
    .then(json => txtOutput.innerText = json.contents.translated)
    .catch(errorHandler);
}


btnTranslate.addEventListener("click", clickHandler);
// txtOutput.innerText = json.contents.translated