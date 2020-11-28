var text = document.querySelector('.txt-translate');
var btn = document.querySelector('.btn-translate');
var translatedText = document.querySelector(".txt-translated");

function errorHandler(error){
    console.log("error:", error);
    alert("something went wrong! try again");
}

function translation() {
    var url = "https://api.funtranslations.com/translate/minion.json?text=" + text.value;

    fetch(url)
    .then(response => response.json())
    .then(json => {
          console.log(json);
          var minionText = json.contents.translated;
          translatedText.innerText = minionText;
    })
    .catch(errorHandler);
}

btn.addEventListener('click', translation);