//Declaración de variables
    var dinero;
    var saldoCuenta =  0 ;
    var limiteExtraccion = 5000 ;
    var nombreUsuario = " "

//arreglo de usuarios
    var usuarios = [

        {
            nombre : "dario",
            passw : 1234
        },

        {
            nombre : "pepe",
            passw : 4567
        }
    ]

//arreglo de servicios
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
//arreglo de cuentas autorizadas para transferencias
    var cuentas = new Array()
    cuentas = [
        {
            nombre : "pedro",
            numero : 123
        },

        {
            nombre : "juan",
            numero : 456
        },

        {
            nombre : "maria",
            numero : 789
        },

        {
            nombre : "luciana",
            numero : 000
        }
]

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
   var limite = prompt("ingrese su nuevo limite")

    if((limite > 0) && (limite < saldoCuenta)){
        limiteExtraccion = limite
        flag = 1
        }

        else{
        alert("ingrese un limite correcto inferior a:$"+saldoCuenta)
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

    let usuario = {
        nombre : receptor,
        numero : cuentaReceptor
    }

    usuario.nombre = usuario.nombre.toLowerCase()
    let comp = cuentas.find(element=>{
        return element.nombre === usuario.nombre;
    })

    if((comp.nombre === usuario.nombre)&&(comp.numero === usuario.numero)){

        var monto = parseInt (prompt("ingrese el monto que desea transferir"))
        if(monto < saldoCuenta){
            alert("seran descontados de su cuenta $" + monto)
            saldoCuenta -= monto
            actualizarSaldoEnPantalla(saldoCuenta)

        }

    }
    else{
        alert("Cuenta erronea")
    }

}

function iniciarSesion() {

    let flag = 0;

    while(flag == 0){

        let user = prompt("ingrese nombre de usuario")
        let pass = prompt("ingrese contraseña")

        let user2 = {
            nombre : user,
            passw : pass
        }

        user2.nombre = user2.nombre.toLowerCase()
    let compa = usuarios.find(element=>{
        return element.nombre === user2.nombre;
    })


        if((user2.nombre == compa.nombre)&&(user2.passw == compa.passw)){
            alert("Bienvenido "+ user2.nombre)
            nombreUsuario = user2.nombre
            cargarNombreEnPantalla()
            flag = 1
        }
        else{
            confirm("Usuario y/o contraseña incorrecto")

        }
    }



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