//alert ()

let vidaHarry = 250;
let vidaDraco = 250;

let round = 0;

function calcularGolpe(){
    return Math.ceil(Math.random()*100);
}



while(vidaHarry>0 && vidaDraco>0){ 
    round += 1;
    
    //let echizoHarry = Math.ceil(Math.random()*100);
    let echizoHarry = calcularGolpe()
    //let echizoDraco = Math.ceil(Math.random()*100);
    let echizoDraco = calcularGolpe()
    
    if(echizoHarry === echizoDraco){
        vidaDraco -= echizoHarry;
        vidaHarry-= echizoDraco;
    }else if(echizoHarry>echizoDraco){
        vidaDraco -=echizoHarry;
    }else{
        vidaHarry-= echizoDraco;
    }
    
    
    
    
    console.log("-----------------")
    console.log("--- Round " + round + " ---")
    
    
    console.log("Vida de Harry Potter " + vidaHarry)
    console.log("Vida de Draco Malfoy " + vidaDraco)
}

console.log("-----------------")

if(vidaHarry > 0){
    console.log("VICTORIA HARRY POTTER")
}else{
    console.log("VICTORIA DRACO MALFOY")
}