/* Cambio de color por botones */
function cambioColor1() {
    document.getElementById("cambioDeColorDiv").style.backgroundColor = "darkred";
   
      document.getElementById("cambioDeColorDiv1").style.backgroundColor = "dimgrey";
      document.getElementById("cambioDeColorDiv2").style.backgroundColor = "dimgrey";

      
    
  }
  function cambioColor2() {
    document.getElementById("cambioDeColorDiv1").style.backgroundColor = "yellow";
   
      document.getElementById("cambioDeColorDiv").style.backgroundColor = "dimgrey";
      document.getElementById("cambioDeColorDiv2").style.backgroundColor = "dimgrey";
      
    
  }
  function cambioColor3() {
    document.getElementById("cambioDeColorDiv2").style.backgroundColor = "lime";
    
      document.getElementById("cambioDeColorDiv").style.backgroundColor = "dimgrey";
      document.getElementById("cambioDeColorDiv1").style.backgroundColor = "dimgrey";
      
    
  }

/* Cambio de color un boton */

let contador = 0;

function cambioColor() {
  if (contador === 0) {
   cambioColor1();
  }else if(contador === 1){
    cambioColor2();
  }else if(contador === 2){
    cambioColor3();
  }else if(contador === 3) {
    contador = 0;
    cambioColor1();

  }
  contador++
  
}


function test() {
  setInterval(function(){cambioColor()},1000)
  
}


