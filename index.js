const dbProductos = [
    {
        id:1 ,
        name: "Remera",
        price: 4500,
        color: "rosa",
        size: 1 ,
    },
    {
        id:2 ,
        name: "Remera",
        price: 4500,
        color: "blanca",
        size: 2,
    },
     {
        id:3 ,
        name: "Remera",
        price: 4500,
        color: "negra",
        size: 3,
    },
     {
        id:4 ,
        name: "Buzo",
        price: 15000,
        color: "rosa",
        size: 4,
    },
]
let carrito = [];
let productosArr = [];
let trueOfalse = true;

class Producto {
    constructor (id, name, price, color, size) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
        this.size = size;
    }
    iva() {
        return this.price * 0.21;
    }
}

function pushProductos() {
    for (const producto of dbProductos) {
        productosArr.push(new Producto (producto.id,producto.name, producto.price, producto.color, producto.size))
    }
}
pushProductos()

function initProgram() {
    while (trueOfalse) {
        let selectSection = prompt ("¿Qué buscabas? /n 1.Ver productos /n 2. Ver productos ordenados alfabeticamente /n 3. Buscar un producto /n 4. Comprar producto /n 5. Buscar producto de mayor talle  /n 6. Buscar producto de menor valor");
        switch  (selectSection){
            case "1":
                verProductos()
                break
            case "2":
                verProductosAtoZ()
                break
            case "3":
                buscarProducto ()
                break
            case "4":
                agregarAlCarrito()
                break
            case "5":
                maximoTalle()
                break
            case "6":
                minimoValor()
                break
            case "7":
                trueOfalse = false
                break
                default:
                    alert ("No es una opción válida")
                    break
        }
    }
}
//Simulador para ver productos
function verProductos() {
    auxiliarDeProductos (productosArr, alert)
    alert ("No hay más productos disponibles")
    initProgram ()
}
function auxiliarDeProductos(arr, fn) {
    for (const producto of arr) {
        fn(producto.name + " " + producto.price + " " + producto.color + " " + producto.size)
    }
}
//Simulador para ver productos ordenados alfabeticamente
function verProductosAtoZ() {
    productosArr.sort ((a,b) => { 
        if (a.name > b.name){
            return 1
        }
        if (a.name < b.name) {
            return -1
        }
    }
    )
    console.log(productosArr)
    initProgram()
}
//Simulador para buscar un producto
function buscarProducto() {
    let productoAbuscar = prompt ("¿Qué buscas?")
    let productoEncontrado = productosArr.filter((producto) => {
        return producto.name == productoAbuscar
    }
    )
    if (productoEncontrado) {
        productoEncontrado.forEach((producto) => {
            alert(producto.name + " " + producto.price + " " + producto.color + " " + producto.size)
        }

        )
    }
    else {
        alert ("El producto no existe")
    }
}
//Simulador para agregar producto al carrito
function agregarAlCarrito() {
    let productoAbuscar = prompt ("Indique el producto")
    let productoEncontrado = productosArr.find ((producto) => {
        return producto.name == productoAbuscar
    }

    )
    if (productoEncontrado) {
        alert (productoEncontrado.name + " " + productoEncontrado.price + " " + productoEncontrado.color + " " + productoEncontrado.size);
        let confirmacion = prompt ("¿Desear agregar este producto al carrito? /n 1. Si /n 2. No")
        let (confirmacion == 1) 
        carrito.push(productoEncontrado)
        alert ("Producto agregado al carrito")
} else {
    alert ("Producto no agregado al carrito")
    initProgram ()
}

}

function seguirComprando() {
    const seguirComprando = prompt ("¿Deseas ver más productos? /n 1. Si /n 2. No")
    if (seguirComprando == 1) {
        agregarAlCarrito()
    } else {
        if (carrito.lenght > 0) {   
            totalCarrito()  
        } else {
            alert ("No hay productos en el carrito")
        }
        initProgram()
    }
}

function totalCarrito () {
    let precioTotal = carrito.reduce ((acumulador, producto) => {
        return acumulador + producto.price
    } ,0)
    alert ("El precio total es de ${precioTotal}")
}
Toastify({

    text: "Se calculó total del carrito",
    
    duration: 3000,
    position: "center"
    
    }).showToast();

//Simulador busqueda de talle maximo
function maximoTalle() {
    let productos = dbProductos.map ((producto) =>  {
        return {
            name: producto.name,
            size: producto.size
        }
    }
    )
let size = productos.map ((producto) => producto.size)
const maximo = Math.max(...size)
let productoMaximo = productos.find ((producto) => producto.size === maximo)
alert ("El talle mayor que se encuentra en stock es ${maximo} y el producto es ${productoMaximo.name}");
}
//Simulador busqueda de valor minimo
function minimoValor() {
    let productos = dbProductos.map ((producto) =>  {
        return {
            name: producto.name,
            size: producto.price
        }
    }
    )
let price = productos.map ((producto) => producto.price)
const minimo = Math.min(...price)
let productoMinimo = productos.find ((producto) => producto.price === minimo)
alert ("La prenda de menor valor que se encuentra en stock es ${minimo} y el producto es ${productoMinimo.name}");
}

initProgram()

//Sumamos simulador aplicando DOM

function nodos ()
let selection = prompt ("¿Que buscas? /n 1. getElement by ID /n 2. getElement by Class /n 3. getElement by etiqueta n/ 4. Iterar varias clases n/ 4. Salir");
switch (selection) {
    case "1":
        const id = prompt ("Ingrese el ID del producto que quiere seleccionar")
        const elementById = document.getElementById(id)
        console.log (elementById)
        let cambioClase = prompt ("¿Desea cambiar la clase? /n Si /n No")
        if (cambioClase == 1){
            const clase = prompt("Ingrese la clase a agregar")
            elementById.classList.add(clase)
            console.log(elementById.classList)
        }else if(cambioClase == 2) {
            nodos()
        }
        break;
    case "2":
        const clase = prompt ("Ingrese la clase del producto que quiere seleccionar")
        const elementByClass = document.getElementsByClassName(clase)
        console.log (elementByClass);
        for (const element of elementByClass) {
        console.log (element);
        }
        let modificar = prompt ("¿Desea cambiar el texto? /n Si /n No")
        if (modificar == 1){
            const texto = prompt("Ingrese el texto a agregar")
            elementByClass.innerText = texto
        }else if(modificar == 2) {
            nodos()
        }
        break;
    case "3":
        const etiqueta = prompt ("Ingrese la etiqueta que quiere buscar")
        const elementByTag = document.getElementsByTagName(etiqueta)
        for (const element of elementByTag) {
            console.log(element);
        } 
        break;
    case "4":


}

//Simulador de creacion de nodos
function crearNodo() {
let crear = prompt ("Selecciona la etiqueta a crear /n 1. h1 /n 2. p /n 3. Salir");
switch (crear){
    case "1":
        const h1 = document.createElement("h1")
        const texto = prompt ("Ingrese el texto a agregar")
        h1.innerText = texto
        agregando.body.appendChild(h1)
        break;
    case "2":
        const p = document.createElement("h1")
        const textoP = prompt ("Ingrese el texto a agregar")
        p.innerText = textoP
        agregando.body.appendChild(p)
        break;
    case "3":
        crearNodo()
        break;
        default:
            alert ("No indicaste opcion valida")
}
}

//Sumamos eventos
const form1 = document.querySelector("form1");
const valorInput = document.getElementById("valor");
const cantidadInput = document.getElementById("cantidad");
const resultadoContainer = document.getElementById ("resultadoContainer");
const resultado = document.getElementById("resultado");
const inputsForm1 = document.querySelectorAll("inputForm")
const inputsForm2 = document.querySelectorAll("input")
const btnCalcular = document.getElementById("btnCalcular")
let validar = false
let validar2 = false
let formularios = []
const calcularSi = document.getElementById("calcularSi")
const calcularNo = document.getElementById("calcularNo")
const formNuevoUsuario = document.getElementById("formNuevoUsuario")
const btnRegistro = document.getElementById("btnRegistro")
const containerDeFormulario = document.getElementById("containerDeFormulario")
const urlProducts = "https://6494f257b08e17c91791816f.mockapi.io/product"

form1.addEventListener("submit", (event) => {
    event.preventDefault ();
    Swal.fire({
        title: '¿Desea generar usuario?',
        text: "No podrás realizar modificaciones luego",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, enviar mis datos!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Tus datos se enviaron correctamente',
            'Están siendo procesados',
            'success'
          )
        }
      })

    console.log (event)
    console.log ("form1 submitted");
    if  (validar) {
     calcularCarrito()
    }else {
        alert ("Por favor complete los campos vacios")
    }
})
//Simulador de calculos
function calcularCarrito() {
   const valor = valorInput.value
   const cantidad = cantidadInput.value

   const precioConComa = (Math.round(valor*cantidad)).toFixed(2).replace(".", ",");
   resultado.innerText = "Total a pagar: $$(precioConComa)"
}
//Simulador habilitar y deshabilitar boton segun inputs
console.log(inputsForm1)
inputsForm1.forEach(input => {
 input.addEventListener("input", () => {
 if (inputsForm1[0].value && inputsForm1[1].value){
    btnCalcular.classList.remove("buttonDisable")
    let validar = true
 }else {
  btnCalcular.classList.add("buttonDisable")
  validar = false
 }
 
}) 
 })

 //Simulador de btn si/no
 calcularSi.addEventListener("click" , () => {
 form1.reset()
 resultadoContainer.classList.add("buttonDisable")
 })

 calcularNo.addEventListener("click" , () => {
    formNuevoUsuario.classList.remove("disable")
 })
//Simulador vender producto
 e.preventDefault ();
 const productoSeleccionado = productSelect.value;
 const nombreCliente = customerName.value;
 const producto = productos.find((producto) => {
    return producto.id == productoSeleccionado;
 });
 const objetoProducto = {
    ...producto,
    nombreCliente,
 };

 esperandoPago ()

 //Simulador formulario nuevo usuario
 formNuevoUsuario.addEventListener("submit", (event) =>{
    event.preventDefault()
    if (validar2) {
        enviarFormulario()
    } else {
        alert("Por favor completar los campos vacios")
    }
 })
 
 function enviarFormulario() {
    const nombre = inputsForm2[0].value;
    const email = inputsForm2[1].value;
    const password = inputsForm2[2].value;
    const valor = valorInput.value;
    const cantidad = cantidadInput.value;
    const precioConComa = (Math.round(valor*cantidad)).toFixed(2).replace(".", ",");
    const datos = {
        nombre,
        email,
        password,
        valor,
        cantidad,
        precioConComa,
    }
function enviarFormulario() {
 formularios.forEach(formulario => {
    console.log(formulario)
    containerDeFormulario.innerHTML += "<p>Nombre: ${formulario.nombre} - email ${formulario.email} - password ${formulario.password} - valor ${formulario.valor} - Cantidad ${formulario.cantidad}</p>"  
})
}

//Simulador Json
formularios.push(datos)
localStorage.setItem("formulario", JSON.stringify(formularios))

localStorage.setItem("nombre", nombre)
localStorage.setItem("email", email)
localStorage.setItem("password", password)

console.log(datos)
formNuevoUsuario.reset()
form1.reset()
resultadoContainer.classList.add("disable")
formNuevoUsuario.classList.add("disable")
btnRegistro.classList.add("buttonDisable")
validar2 = false
validar = false
alert("Su usuario ha sido creado con exito")
 }

document.addEventListener("DOMContentLoaded", () =>{
    let formulario = localStorage.getItem("formulario")
    if (formulario !== null){
        if (formulario.lenght){
            JSON.parse(formulario).forEach(formulario =>{
                formularios.push(formulario)
            })
        }
    }
})

 inputsForm2.forEach(input => {
    input.addEventListener("input", () => {
    if (inputsForm1[0].value && inputsForm1[1].value && inputsForm1[2].value){
       btnRegistro.classList.remove("buttonDisable")
       let validar2 = false
    }else {
     btnRegistro.classList.add("buttonDisable")
     validar = true
    }
    
   }) 
    })

//Simulador para ver local storage
btnCalcular.addEventListener("click", () => {
 let nombre = localStorage.getItem("nombre")
 let email = localStorage.getItem("email")
 let password = localStorage.getItem("password")

 console.log(nombre, email, password)
})

//Promesas
esperandoPago()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

function esperandoPago(){
    return new Promise ((resolve, reject) => {
        const trueOfalse = Math.random () < 0.5;
        setTimeout(() => {
            if (trueOfalse){
                resolve("El pago fue exitoso");
            }else {
                reject ("El pago fue rechazado")
            }
        }, 3000);
    })
}

function traerProductos () {
    fetch(urlProducts)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) =>{
            productos.push(producto);
        })
    })
}
async function crearProducto(producto){
    const resp  = await fetch(urlProducts,{
        method: "POST",
        body:JSON.stringify(producto),
        headers: {
            "content-type": "application/json",
        }
    })
    const data = await resp.json()
    console.log(data)
}