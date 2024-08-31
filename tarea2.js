
function numerousuario(ingresado){
  
    while(ingresado > 10 ){
        console.log("el numero debe ser menor que 10 no mayor ");
        ingresado = parseInt(prompt("por favor vuelve a ingresa un numero entre el 1 al 10,que no sea mayor a 10  : "));
    }
        while (ingresado <0 ){
            ingresado = parseInt(prompt("por favor ingresa un numero entre el 1 al 10 ,ingresa un valor mayor a 0: "));
        
    }if (ingresado >0 && ingresado <10 ){
        console.log("el numero ya fue ingresado con exito :) ");
    }
    return ingresado;
   
    }
   let ingresado = parseInt(prompt("por favor ingresa un numero entre el 1 al 10 : ")); //se almacena en una variable let 
   console.log(numerousuario(ingresado));
     let vidas= 3;
   console.log("tienes esta cantidad de vida :  "+ 3);
   
   
console.log ("-----------------")



function comparar(random){
     let numerorandom = Math.floor(Math.random() * (10-1+1)+1);
         
   // console.log("el numero aleatorio es :"+numerorandom);
         
    while(ingresado !==numerorandom && vidas >0){
    vidas --; 
    console.log("---------------------------------");
    console.log("el numero  que escribiste y el numero aleatorio es diferente ");
    console.log("te quedan  "+ vidas + " vidas ");
    ingresado = parseInt(prompt("por favor ingresa un numero entre el 1 al 10 : ")); //se almacena en una variable let 
    ///if( vidas <= 0 ){
     //console.log("lo siento se te acabaron las vidas :( ");
    
}


    if(vidas <=0){
            console.log("lo siento se te acabaron las vidas :( ");
            console.log("el numero aleatorio es :  "+ numerorandom)
            console.log(` GAME OVER
      ______
   .-"      "-.
  /            \\
 |              |
 |,  .-.  .-.  ,|
 | )(__/  \\__)( |
 |/     /\\     \\|
 (_     ^^     _)
  \\__|IIIIII|__/
   | \\IIIIII/ |
   \\          /
    \`--------\`
`);
        
    }else if(ingresado==numerorandom) {
    
    console.log("GENIAL :3 encontraste el numero "+numerorandom);
    
       
    }
        
}
    comparar(ingresado);