// 1º)
var mutiplos = n =>{
    if(n % 5 === 0 && n % 3 === 0){
      return 'JAVASCRIPT';
    }
    else if(n %3 === 0){
      return 'Dale';
    }
    else if(n %5 === 0){
      return 'Bora';
    }
    else{
      return 'Numero invalido (mutipos de 3 e 5).';
    }
    
  }
  console.log(mutiplos(15));
  
  // 2º)
  var signo = (dia, mes) => {
    if(dia > 21 && mes == 3 || dia < 20 && mes == 4){
      return 'Áries';
    }
    else if(dia >= 21 && mes == 4 || dia <= 20 && mes == 5){
      return 'Touro';
    }
    else if(dia >= 21 && mes == 5 || dia <= 20 && mes == 6){
      return 'Gêmeos';
    }
    else if(dia >= 21 && mes == 6 || dia <= 22 && mes == 7){
      return 'Câncer';
    }
    else if(dia >= 23 && mes == 7 || dia <= 22 && mes == 8){
      return 'Leão';
    }
    else if(dia >= 23 && mes == 8 || dia <= 22 && mes == 9){
      return 'Virgem';
    }
    else if(dia >= 23 && mes == 9 || dia <= 22 && mes == 10){
      return 'Libra';
    }
    else if(dia >= 23 && mes == 10 || dia <= 21 && mes == 11){
      return 'Escorpião';
    }
    else if(dia >= 22 && mes == 11 || dia <= 21 && mes == 12){
      return 'Sagitário';
    }
    else if(dia >= 22 && mes == 12 || dia <= 19 && mes == 1){
      return 'Capricórnio';
    }
    else if(dia >= 20 && mes == 1 || dia <= 18 && mes == 2){
      return 'Aquário';
    }
    else if(dia >= 19 && mes == 2 || dia <= 20 && mes == 3){
      return 'Peixes';
    }
    else{
      return 'Data invalida, siga o exemplo: (dia, mes) => (22, 05)';
    }
  }
  console.log(signo(22, 6));
  