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
        },
        
        {
            nombre : "luciana",
            passw : 303456
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
//extrae dinero de la cuenta validando fondos y limite de extraccion
function extraerDinero() {

    cantidad  =  parseInt(prompt("ingrese cantidad (deben ser multiplos de 100)"))

    if( (cantidad % 100) == 0 && cantidad < limiteExtraccion && cantidad < saldoCuenta){
        confirm("Usted extraera $"+cantidad+" de su cuenta")
        saldoCuenta -= cantidad
        actualizarSaldoEnPantalla(saldoCuenta)
    }

    else if(cantidad > saldoCuenta){
        alert("No dispone de fondos, su saldo es de :$"+ saldoCuenta)
    }
    else{
        alert("Su transaccion no puede ser completada,intente nuevamente")
    }
}
//ingresa el dinero indicado en la cuenta del usuario
function depositarDinero() {

    dinero = parseInt (prompt("ingrese la cantidad de dinero"))

    sumarDinero(dinero)
}

function sumarDinero(dinero){

    saldoCuenta += dinero

    actualizarSaldoEnPantalla(saldoCuenta)

}
//gestiona el pago de servicios y descuenta el importe validando los fondos
// *** se uso SWITCH por consigna ***
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
//transfiere dinero de la cuenta del usuario a una cuenta validada y registrada.
function transferirDinero() {

    var receptor = prompt("ingrese el nombre de la cuenta a la que desea transferir")

    var cuentaReceptor = parseInt( prompt("ingrese el numero de cuenta"))

    let usuario = {
        nombre : receptor,
        numero : cuentaReceptor
    }

    usuario.nombre = usuario.nombre.toLowerCase()
    let comp = cuentas.find(element=>{              //busca en las cuentas si esta registrada
        return element.nombre === usuario.nombre;
    })

    if((comp.nombre == receptor)&&(comp.numero == cuentaReceptor)){

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
//gestiona el inicio de sesion validando usuario y contraseña
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
            let btn = document.getElementById('exit');
            btn.style.display = 'inline';
            flag = 1
        }
        else{
            confirm("Usuario y/o contraseña incorrecto")
            saldoCuenta = 0;

        }
    }



}
//cierre de sesion
function logOut(){
    let ex = confirm("Desea cerrar su cuenta?")

    if(ex){
        //logica de eliminado de datos en storage si estuviese en uso
        location.reload()
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