let click = document.querySelector('#botao');

click.addEventListener('click', function (e) {
    let chave = 'hftvP2DmDbWO81fKTCIdi1t5lBwCjcUm3JE2dYj7'
    let data = document.getElementById('data').value
    let retorno = $.ajax({ url: `https://api.nasa.gov/planetary/apod?api_key=${chave}&date=${data}`, async: false }).responseJSON;
    console.log(retorno);

    if(document.getElementById('imagemNasa') == null){
        document.getElementById('imagem').innerHTML += `<div id="textoNasa">${retorno.explanation}</div>`;
        document.getElementById('imagem').innerHTML += `<img src='${retorno.url}' id='imagemNasa'>`;
      } else {
        document.getElementById('textoNasa').innerText = retorno.explanation;
        document.getElementById('imagemNasa').src = retorno.url;
      }
      e.preventDefault();
    })
