var imagem1 = window.document.getElementById("imghistoriaex1");
var imagem2 = window.document.getElementById("imghistoriaex2");
var setaDireita = window.document.getElementById("setadireita");
var setaEsquerda = window.document.getElementById("setaesquerda");

function rolarDireita() {
  imagem1.style = "display:none";
  imagem2.style = "display:flex";
  setaDireita.style = "display:none; ";
  setaEsquerda.style = "display:flex ; ";
}
function rolarEsquerda() {
  imagem1.style = "display:flex";
  imagem2.style = "display:none";
  setaDireita.style = "display:flex; ; ";
  setaEsquerda.style = "display:none; ";
}
