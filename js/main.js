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

prompt("¡Bienvenido a la batalla de hechizos entre Harry Potter y Draco Malfoy! Presiona 'Aceptar' para empezar.");


while(sigueLucha()){ 
    round += 1;
    
    let hechizoUsuario = prompt(`¡Ronda ${round}! Elige tu hechizo (Expelliarmus / Sectumsempra / Avada Kedavra):`);
    let echizoHarry = calcularHechizo()
    let echizoDraco = calcularHechizo()
    

    if (hechizoUsuario === "Expelliarmus" || hechizoUsuario === "Sectumsempra" || hechizoUsuario === "Avada Kedavra") {
        if(echizoHarry === echizoDraco){
            vidaDraco -= echizoHarry;
            vidaHarry -= echizoDraco;
        }else if(echizoHarry > echizoDraco){
            vidaDraco -= echizoHarry;
            alert("¡Harry conjuró un hechizo más poderoso! ¡Daño a Draco!");
            document.body.innerHTML += '<img src="imagenes/harry.png" alt="HechizoHarry" width="150" />';
        }else{
            vidaHarry -= echizoDraco;
            alert("¡Draco lanzó un hechizo más poderoso! ¡Daño a Harry!");
            document.body.innerHTML += '<img src="imagenes/draco.png" alt="HechizoDraco" width="150" />';
        }
    } else {
        alert("¡Hechizo no válido! Harry se distrajo y Draco aprovechó para atacar.");
        vidaHarry -= echizoDraco;
        document.body.innerHTML += '<img src="imagenes/draco.png" alt="HechizoDraco" width="150" />';
    }
    
    console.log("-----------------");
    console.log("--- Round " + round + " ---");
    console.log("Vida de Harry Potter: " + vidaHarry);
    console.log("Vida de Draco Malfoy: " + vidaDraco);
}

console.log("-----------------");

if(harryVive()){
    alert("¡VICTORIA DE HARRY POTTER!");
    document.body.innerHTML += '<img src="imagenes/gryffindor.png" alt="Gryffindor gana" width="200" />';
}else{
    alert("¡VICTORIA DE DRACO MALFOY!");
    document.body.innerHTML += '<img src="imagenes/slytherin.png" alt="Slytherin gana" width="200" />';
}