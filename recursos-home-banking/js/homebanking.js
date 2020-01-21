//Declaración de variables
var dinero;
var saldoCuenta =  0 ; 
var limiteExtraccion = 5000 ;

var servicios = [
    {
    nombre : "luz",
    costo : 300 , 
    estaPago : false
},
{
    nombre : "gas",
    costo : 700 , 
    estaPago : false
},
{
    nombre : "internet",
    costo : 900 , 
    estaPago : false
},
{
  nombre : "cel",
    costo : 600 , 
    estaPago : false
}
]

var cuentas = [
    {
        nombre : "Pedro",
        numero : 123
    },

    {
        nombre : "Juan",
        numero : 456
    },

    {
        nombre : "Maria",
        numero : 789
    },

    {
        nombre : "Maria",
        numero : 000
    }
]
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantaantidad_totallla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    limite = prompt("ingrese su nuevo limite")
    if((limite > 0) && (limite < saldoCuenta)){
        limiteExtraccion = limite
        }
    else{
        alert("ingrese un limite correcto")
        cambiarLimiteDeExtraccion()
    }

    actualizarLimiteEnPantalla(limiteExtraccion)

}

function extraerDinero() {
    cantidad  =  parseInt(prompt("ingrese cantidad (deben ser multiplos de 100)"))
    if( (cantidad % 100) == 0 && cantidad < limiteExtraccion && cantidad < saldoCuenta){
        saldoCuenta -= cantidad
        actualizarSaldoEnPantalla(saldoCuenta)
    }
    else{
        alert("su transaccion no puede ser completada, intente nuevamente")
    }

}

function depositarDinero() {
  dinero = parseInt (prompt("ingrese la cantidad de dinero"))
  sumarDinero(dinero)
  
}
function sumarDinero(dinero){
    
    saldoCuenta += dinero
    
    actualizarSaldoEnPantalla(saldoCuenta)

}

function pagarServicio() {
    var mensaje = "ingrese que servicio desea abonar : \n 1.luz \n 2.gas  \n 3.internet  \n 4.celular"
    var servicio = parseInt( prompt(mensaje))
    
  switch (servicio) {
      case 1: 
            var precio = servicios[(servicio - 1)].costo
            console.log(precio);
            
            if(precio < saldoCuenta){
                confirm("el costo de su servicio es : $"+ precio + " confirme para abonar")
                alert("su servicio a sido abonado")
                saldoCuenta -= servicios[servicio-1].costo 
                actualizarSaldoEnPantalla(saldoCuenta)
            }
            else{
                alert("no dispone de fondos suficientes")
            } 
        
            
            break;
            
            case 2: 
            var precio = servicios[(servicio - 1)].costo
            console.log(precio);
            
            if(precio < saldoCuenta){
                confirm("el costo de su servicio es : $"+ precio + " confirme para abonar")
                alert("su servicio a sido abonado")
                saldoCuenta -= servicios[servicio-1].costo 
                actualizarSaldoEnPantalla(saldoCuenta)
            }
            else{
                alert("no dispone de fondos suficientes")
            } 
        
            
            break;
            
            case 3: 
            var precio = servicios[(servicio - 1)].costo
            console.log(precio);
            
            if(precio < saldoCuenta){
                confirm("el costo de su servicio es : $"+ precio + " confirme para abonar")
                alert("su servicio a sido abonado")
                saldoCuenta -= servicios[servicio-1].costo 
                actualizarSaldoEnPantalla(saldoCuenta)
            }
            else{
                alert("no dispone de fondos suficientes")
            } 
        
            
            break;
            
            case 4: 
            var precio = servicios[(servicio - 1)].costo
            console.log(precio);
            
            if(precio < saldoCuenta){
                confirm("el costo de su servicio es : $"+ precio + " confirme para abonar")
                alert("su servicio a sido abonado")
                saldoCuenta -= servicios[servicio-1].costo 
                actualizarSaldoEnPantalla(saldoCuenta)
            }
            else{
                alert("no dispone de fondos suficientes")
            } 
        
            
            break;
  
      default:
          alert("no ah seleccionado ningun servicio")
          break;
  }

}

function transferirDinero() {
    
    var receptor = prompt("ingrese el nombre de la cuenta a la que desea transferir")
    
    var cuentaReceptor = parseInt( prompt("ingrese el numero de cuenta"))
    console.log(receptor)
    console.log(cuentaReceptor);
    var user = {
        nombre : receptor,
        numero : cuentaReceptor
    }
    

    // if(){
    //     debugger
    //     var monto = parseInt (prompt("ingrese el monto que desea transferir"))
    //     if(monto < saldoCuenta){
    //         alert("seran descontados de su cuenta $" + monto)
    //         saldoCuenta -= monto
    //         actualizarSaldoEnPantalla(saldoCuenta)

    //     }
    // }
    // else{
    //     alert("Cuenta erronea")
    // }

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}