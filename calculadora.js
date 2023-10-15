
let saldoDeVitorias = calcular(5, 4
    )
console.log( "o heroi tem de saldo de " + saldoDeVitorias + " esta no nivel " +  rank)
    function  calcular(vitoria, derrota ){
        
        let result = vitoria - derrota
            if( vitoria <= 9 ){
                rank = "Ferro"
           }else if (result <= 20){
              rank = "Bronze"  
          }else if(result <= 50){
              rank = "Prata" 
          }else if(result <= 80){
              rank = "Ouro" 
          }else if(result <= 90){
              rank= "diamante"
          }else if( result <= 100){
              rank = "Lendario"
          }else if (result >= 101){
              rank = " Imortal"
                        } 
            return result
            
}
