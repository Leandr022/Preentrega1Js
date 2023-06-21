//alert ()

let vidaHarry = 250;
let vidaDraco = 250;

let round = 0;

function calcularHechizo(){
    return Math.ceil(Math.random()*100);
}

function sigueLucha(){
    return vidaHarry>0 && vidaDraco>0
}

function harryVive(){
    return vidaHarry > 0
}


while(sigueLucha()){ 
    round += 1;
    
    let echizoHarry = calcularHechizo()
    let echizoDraco = calcularHechizo()
    
    if(echizoHarry === echizoDraco){
        vidaDraco -= echizoHarry;
        vidaHarry-= echizoDraco;
    }else if(echizoHarry>echizoDraco){
        vidaDraco -=echizoHarry;
        document.write('<img src="imagenes/harry.png" alt="HechizoHarry" width= "150" />') 
    }else{
        vidaHarry-= echizoDraco;
        document.write('<img src="imagenes/draco.png" alt="HechizoDraco" width= "150" />') 
    }
    
    
    
    
    console.log("-----------------")
    console.log("--- Round " + round + " ---")
    
    
    console.log("Vida de Harry Potter " + vidaHarry)
    console.log("Vida de Draco Malfoy " + vidaDraco)
}

console.log("-----------------")

if(harryVive()){
    console.log("VICTORIA HARRY POTTER")
    document.write('<img src="imagenes/gryffindor.png" alt="Gryffindor gana" width= "200" />')
}else{
    console.log("VICTORIA DRACO MALFOY")
    document.write('<img src="imagenes/slytherin.png" alt="Slytherin gana" width= "200" />')
}