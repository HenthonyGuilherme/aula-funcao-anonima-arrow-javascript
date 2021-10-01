// 1º)
var aprovadoFunc = function(){
    var aprovados = [
      {candidato: "Renata Soares", nota: 7.8, idade: 29},
      {candidato: "Marcos Texeira", nota: 7.8, idade: 26},
      {candidato: "Priscila Gomes", nota: 7.8, idade: 30},
      {candidato: "João Oliveira", nota: 7.8, idade: 27},
      {candidato: "Adriana Telles", nota: 7.8, idade: 28}
    ];
    return aprovados[0];
  }
  console.log(aprovadoFunc());
  
  // 2º)
  var repitir = function(strg){
    var esP = strg + ' ';
    var rept = esP.repeat(37);
    return rept;
  }
  console.log(repitir('Olá mundo'));