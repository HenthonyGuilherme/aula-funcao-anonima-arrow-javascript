// 1º)
var cidades = function(){
    var cArray = ['Salvador', 'Aracaju', 'Recife', 'Maceió', 'Natal'];
    var arrayStr = cArray.join(', ');
    var maius = arrayStr.toUpperCase();
    return maius;
  }
  console.log(cidades());
  
  // 2º) 
  var numeroPar = function(){
    for(let cont = 100; cont < 450 ; cont++){
      if(cont % 2 === 0){
        console.log(cont);
      }
  }
  }
  console.log(numeroPar());
  
  
  // 3º)
  
  var juntar = function(stg1, stg2, stg3, stg4){
    var concat = stg1 +' '+ stg2 +' '+ stg3 +' '+ stg4;
    return concat;
  } 
  console.log(juntar('stg1', 'stg2', 'stg3', 'stg4'));
  