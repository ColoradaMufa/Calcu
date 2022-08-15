for( let i = 0 ; i <= 1 ; i++){

    let num_uno = parseInt(prompt("Ingrese un numero"));
    let num_dos = parseInt(prompt("Ingrese otro numero"));

    if( num_dos == 0){
        console.log("No se puede multiplicar por 0");
        break
    }

    
    console.log("El resultado de la multiplicacion es:" , num_uno * num_dos);

}
