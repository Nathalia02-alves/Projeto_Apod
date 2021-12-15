var data = new Date();

var dataInicial = `${data.getFullYear()}-${

  data.getMonth() + 1
}-${data.getDate()}`;

var calendario = document.getElementById("calendario");

function gerarImg(imagem){
    let foto = document.getElementById("foto");
    foto.src = imagem.url;
    let titulo = document.getElementById("titulo");
    titulo.innerText = imagem.title;
    let texto = document.getElementById("texto");
    texto.innerText = imagem.explanation;
}

$(document).ready(function () {
  $("button").click(function () {
      $.get("https://api.nasa.gov/planetary/apod?api_key=u5bzacOGURguFitnDhbPdnP41zGjKY0GSX2X7wQy", { date: calendario.value }, function (data) {
        gerarImg(data);
      });
  });
});

$(document).ready(function () {
  $.get("https://api.nasa.gov/planetary/apod?api_key=u5bzacOGURguFitnDhbPdnP41zGjKY0GSX2X7wQy", { date: dataInicial }, function (data) {
    gerarImg(data);
  });
});


























/*var imagem; 


function geraImg(){

let foto = document.getElementById('foto');
foto.src = imagem.url

}
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}

function main(){
    let data = fazGet("https://api.nasa.gov/planetary/apod?api_key=u5bzacOGURguFitnDhbPdnP41zGjKY0GSX2X7wQy");
     imagem = JSON.parse(data);
   
    console.log(imagem)
}

 main()






























/*function geraImg(){
    var novaBusca = new XMLHttpRequest

    novaBusca.open('GET','https://api.nasa.gov/planetary/apod?api_key=u5bzacOGURguFitnDhbPdnP41zGjKY0GSX2X7wQy')
    
    novaBusca.onload = function(){

    if(novaBusca.status===200){
        let responseNovo = novaBusca.responseNovo;
        let responseObj= JSON.parse(responseNovo);
        console.log(responseObj[0].name.first)

        let texto = document.querySelector('#texto')
        let foto  = document.querySelector('#fotos')
        foto.src = responseNovo.picture.large
        texto.innerText = responseNovo.texto.first
        console.log(responseNovo)

    }

    }
    novaBusca.send()
}*/