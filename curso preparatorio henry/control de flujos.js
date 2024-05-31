function viajar(destino){
if (destino === "Brasil") {
    console.log("Gire a la Izquierda")
    return "Izquierda"} 
    else if (destino === "Argentina") {
    console.log("Gire a la Derecha")
return "Derecha"}
else 
console.log("Estas perdido")
return "Perdido"}

function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
             return "SI"
    } 
    console.log( false );
    return "NO"
  }
  
  puedeManejar(17);
