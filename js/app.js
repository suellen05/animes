function CarregarAnimes() {
    let objetoAnimes = [
    {
    foto:"pucca3.jpg",
    nome: "Pucca Amorosa"
},
{
    foto: "puccaegaru.jpg",
    nome: "Pucca e Garu"
},
{ 
    foto:"puccamiku.jpg",
    nome:"Pucca Estudante"
}

 ]
let listaAnimes = document.querySelector(".lista-animes");
let cartao = "";

for (let i = 0; i < objetoAnimes.length; i++) {
    cartao +="<div class='cartao'>";
    cartao += "<img src='img/" + objetoAnimes[i].foto + "'>";
    cartao += objetoAnimes[i].nome;
    cartao += "</div>"
}
    listaAnimes.innerHTML = cartao;

}

window.onload = function(){
    CarregarAnimes();
}