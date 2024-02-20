
ciduad = {};
datos = {}

while(true){

    let eleccion = Number(prompt(" Bienvenido al sistema \n 1. Registro ciudad. \n 2. Registro sismo \n 3. Buscar Sismo por ciudad \n 4. Informe de Riesgo \n 5. Salir"))

    switch(eleccion){

        case 1: 
            RegistroCiudades();

        case 2:
            Registrosismo();

        case 3:          
            break;  
    }
}



function RegistroCiudades(){
        let city = prompt("Ingrese el nombre de la ciudad");
        ciudad[city] = {};
}


function Registrosismo(){

    let city = prompt("Ingrese el nombre de la ciudad");

    RegistrarSismo1 = prompt("Ingrese el sismo 1\n")
    datos['Sismo 1'] = RegistrarSismo1
    
    RegistrarSismo1 = prompt("Ingrese el sismo 2\n")
    datos['Sismo 2'] = RegistrarSismo2
    RegistrarSismo1 = prompt("Ingrese el sismo 3\n")
    datos['Sismo 3'] = RegistrarSismo3
    RegistrarSismo1 = prompt("Ingrese el sismo 4\n")
    datos['Sismo 4'] = RegistrarSismo4
    RegistrarSismo1 = prompt("Ingrese el sismo 5\n")
    datos['Sismo 5'] = RegistrarSismo5
    RegistrarSismo1 = prompt("Ingrese el sismo 6\n")
    datos['Sismo 6'] = RegistrarSismo6
    RegistrarSismo1 = prompt("Ingrese el sismo 7\n")
    datos['Sismo 7'] = RegistrarSismo7
    RegistrarSismo1 = prompt("Ingrese el sismo 8\n")
    datos['Sismo 8'] = RegistrarSismo8
    RegistrarSismo1 = prompt("Ingrese el sismo 9\n")
    datos['Sismo 9'] = RegistrarSismo9
    RegistrarSismo1 = prompt("Ingrese el sismo 10\n")
    datos['Sismo 10'] = RegistrarSismo10

    sismo = Registrosismo()
    ciduad[city].update(sismo)
}










 


