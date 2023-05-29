

// FONDO DE CIELO //

for ( i=0 ;  i<400 ;i++)
{
let posX = Math.random()*$(window).innerWidth();
let posY = Math.random()*$('.cielo-1').height();
let alfa = Math.random();
let estrella = '<div class="estrella"  style="left:'+posX+'px;top:'+posY+'px; opacity:'+alfa+'"></div>';
  
  $('.cielo-1').append(estrella);
 }

for ( j=0 ;  j<400 ;j++)
{
  let posLeft = Math.random()*$(window).innerWidth();
  let posTop = Math.random()*$('.cielo-2').height();
  let omega = Math.random();
  let estrellaDos = '<div class="estrellaDos" style="left:'+posLeft+'px;top:'+posTop+'px;opacity:'+omega+'"></div>';
            
  $('.cielo-2').append(estrellaDos);
}

$(document).ready(function() {
  let newWidth = 500; // El ancho deseado en píxeles
  $(window).width(newWidth);
});


//PUZZLE // 

function desordenar (){
 piezas =  piezas.sort(function (){
    return Math.random() - 0.5
  });
}

function desmarcarTodas(){
  //elimina el borde de todas las casillas (aunque no lo tuviese)
  for(let i= 0; i <=8; i++)
  document.getElementById("img_" + i).style.border = null;

}
// marco las casillas 
function seleccionar (casilla){
    num_click = num_click + 1 ; 
    console.log("click num:" + num_click)

if (num_click == 1){
casilla_click_primero = casilla; 
desmarcarTodas();
document.getElementById("img_" + casilla).style.border = "solid 2px red";
console.log("Memorizo el primero click" + casilla_click_primero)
}

if(num_click ==2){

  let casilla_click_segundo = casilla

  let contenido = piezas[casilla_click_primero];
  piezas[casilla_click_primero] = piezas [casilla_click_segundo]
  piezas [casilla_click_segundo] = contenido; 
  

  num_click =0; 

  desmarcarTodas();

  refrescarPuzzle ();

  let correcto = comprobarPuzzleFinalizado ();
  if (correcto == true){
    let newButton = document.createElement("button");
    newButton.innerHTML = "Felicitacion Puzzle terminado";
    document.body.appendChild(newButton);
}
}

//Comprobamos si esta terminado ok 
function comprobarPuzzleFinalizado (){
let correcto = true;
  for(let i= 0; i <=8; i++){
     if (piezas [i] != i){
      correcto =  false;
     }
  }
  return correcto; 
  }
}

function refrescarPuzzle (){
  for(let casilla= 0; casilla <=8; casilla++){
  let imagen = piezas [casilla]
  document.getElementById("img_" +casilla).src ="./img/image_part_00"+ imagen +".png"
}
}

function primeraImg (){

}





//comienzo 
let piezas = [0,1,2,3,4,5,6,7,8];
//distingo los clicks
let num_click = 0;
//primer click
let casilla_click_primero;
//segundo click
let casilla_click_segundo
//Llamo a la funcion desordenar
desordenar (); 
//llamo a la funcion para resfrescar el puzzle
refrescarPuzzle();


