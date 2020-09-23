
const urlDatosParcial1 = 'https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json';

let burgers;
let tacos;
let salads;
let desserts;
let drinks;

let productosCarrito = new Array();
let cantidadProductosAgregados = 0;
let cantidadDifenrentesProductosAgregados = 0;

fetch(urlDatosParcial1)
    .then(response => {
        return response.json()
    })
    .then(myJson => {

        myJson.forEach((element, index) => {
            if(index === 0){
                burgers = element
            }
            else if(index === 1){
                tacos = element
            }
            else if(index === 2){
                salads = element
            }
            else if(index === 3){
                desserts = element
            }
            else if (index === 4){
                drinks = element
            }
        })
    })

function addCar(type, name){
    let existe = false;
    let indexExiste = -1;
    switch(type){
        case burgers.name:
            productosCarrito.forEach((element, index)=> {
                if(element.description === name){
                    existe = true;
                    indexExiste = index;
                }
            })
            if(!existe){
                burgers.products.forEach(element => {
                    if(element.name === name){
                        cantidadDifenrentesProductosAgregados++;
                        cantidadProductosAgregados++;
                        document.getElementById("cantidadCarrito").innerHTML = cantidadProductosAgregados + " items";
                        let productoAgregar = new Object();
                        productoAgregar.item = cantidadDifenrentesProductosAgregados;
                        productoAgregar.qty = 1;
                        productoAgregar.description = element.name;
                        productoAgregar.unitPrice = element.price;
                        productoAgregar.amount = element.price;

                        productosCarrito.push(productoAgregar);
                    }
                })
            }
            else{
                cantidadProductosAgregados++;
                document.getElementById("cantidadCarrito").innerHTML = cantidadProductosAgregados + " items";
                productosCarrito.find(element => {
                    element
                })
                productosCarrito[indexExiste].qty++;
                productosCarrito[indexExiste].amount = productosCarrito[indexExiste].qty * productosCarrito[indexExiste].unitPrice;
            }
            break;

        case tacos.name:
            productosCarrito.forEach((element, index)=> {
                if(element.description === name){
                    existe = true;
                    indexExiste = index;
                }
            })
            if(!existe){
                tacos.products.forEach(element => {
                    if(element.name === name){
                        cantidadDifenrentesProductosAgregados++;
                        cantidadProductosAgregados++;
                        document.getElementById("cantidadCarrito").innerHTML = cantidadProductosAgregados + " items";
                        let productoAgregar = new Object();
                        productoAgregar.item = cantidadDifenrentesProductosAgregados;
                        productoAgregar.qty = 1;
                        productoAgregar.description = element.name;
                        productoAgregar.unitPrice = element.price;
                        productoAgregar.amount = element.price;

                        productosCarrito.push(productoAgregar);
                    }
                })
            }
            else{
                cantidadProductosAgregados++;
                document.getElementById("cantidadCarrito").innerHTML = cantidadProductosAgregados + " items";
                productosCarrito.find(element => {
                    element
                })
                productosCarrito[indexExiste].qty++;
                productosCarrito[indexExiste].amount = productosCarrito[indexExiste].qty * productosCarrito[indexExiste].unitPrice;
            }
            break;

        case salads.name:
            productosCarrito.forEach((element, index)=> {
                if(element.description === name){
                    existe = true;
                    indexExiste = index;
                }
            })
            if(!existe){
                salads.products.forEach(element => {
                    if(element.name === name){
                        cantidadDifenrentesProductosAgregados++;
                        cantidadProductosAgregados++;
                        document.getElementById("cantidadCarrito").innerHTML = cantidadProductosAgregados + " items";
                        let productoAgregar = new Object();
                        productoAgregar.item = cantidadDifenrentesProductosAgregados;
                        productoAgregar.qty = 1;
                        productoAgregar.description = element.name;
                        productoAgregar.unitPrice = element.price;
                        productoAgregar.amount = element.price;

                        productosCarrito.push(productoAgregar);
                    }
                })
            }
            else{
                cantidadProductosAgregados++;
                document.getElementById("cantidadCarrito").innerHTML = cantidadProductosAgregados + " items";
                productosCarrito.find(element => {
                    element
                })
                productosCarrito[indexExiste].qty++;
                productosCarrito[indexExiste].amount = productosCarrito[indexExiste].qty * productosCarrito[indexExiste].unitPrice;
            }
            break;

        case desserts.name:
            productosCarrito.forEach((element, index)=> {
                if(element.description === name){
                    existe = true;
                    indexExiste = index;
                }
            })
            if(!existe){
                desserts.products.forEach(element => {
                    if(element.name === name){
                        cantidadDifenrentesProductosAgregados++;
                        cantidadProductosAgregados++;
                        document.getElementById("cantidadCarrito").innerHTML = cantidadProductosAgregados + " items";
                        let productoAgregar = new Object();
                        productoAgregar.item = cantidadDifenrentesProductosAgregados;
                        productoAgregar.qty = 1;
                        productoAgregar.description = element.name;
                        productoAgregar.unitPrice = element.price;
                        productoAgregar.amount = element.price;

                        productosCarrito.push(productoAgregar);
                    }
                })
            }
            else{
                cantidadProductosAgregados++;
                document.getElementById("cantidadCarrito").innerHTML = cantidadProductosAgregados + " items";
                productosCarrito.find(element => {
                    element
                })
                productosCarrito[indexExiste].qty++;
                productosCarrito[indexExiste].amount = productosCarrito[indexExiste].qty * productosCarrito[indexExiste].unitPrice;
            }
            break;

        case drinks.name:
            productosCarrito.forEach((element, index)=> {
                if(element.description === name){
                    existe = true;
                    indexExiste = index;
                }
            })
            if(!existe){
                drinks.products.forEach(element => {
                    if(element.name === name){
                        cantidadDifenrentesProductosAgregados++;
                        cantidadProductosAgregados++;
                        document.getElementById("cantidadCarrito").innerHTML = cantidadProductosAgregados + " items";
                        let productoAgregar = new Object();
                        productoAgregar.item = cantidadDifenrentesProductosAgregados;
                        productoAgregar.qty = 1;
                        productoAgregar.description = element.name;
                        productoAgregar.unitPrice = element.price;
                        productoAgregar.amount = element.price;

                        productosCarrito.push(productoAgregar);
                    }
                })
            }
            else{
                cantidadProductosAgregados++;
                document.getElementById("cantidadCarrito").innerHTML = cantidadProductosAgregados + " items";
                productosCarrito.find(element => {
                    element
                })
                productosCarrito[indexExiste].qty++;
                productosCarrito[indexExiste].amount = productosCarrito[indexExiste].qty * productosCarrito[indexExiste].unitPrice;
            }
            break;

        default:
            break;
    }

}

function showOrderDetail(){

    let tbody = document.getElementById("tbodyOrder")
    let orderDetail = document.getElementById("orderDetail")
    document.getElementById("tituloOfertaProductos").innerHTML = "Order detail"

    let amountTotal = 0;

    tbody.innerHTML = "";

    productosCarrito.forEach(element => {
        amountTotal += element.amount;
        let item = '<tr><th scope="row">' + element.item + '</th>'
        let qty = '<td>' + element.qty + '</td>'
        let description = '<td>' + element.description + '</td>'
        let unitPrice = '<td>' + element.unitPrice + '</td>'
        let amount = '<td>' + element.amount + '</td></tr>'

        tbody.innerHTML += item + qty+ description + unitPrice + amount;
    })
    let total = '<p class="negrilla inline">Total: $' +amountTotal + '</p>'
    let botonCancel = '<span class="inline right-alignmentCancel"><button type="button" class="btn btn-danger  right-alignment" data-toggle="modal" data-target="#exampleModal">Cancel</button></span>'
    let botonConfirm = '<span class="inline right-alignmentConfirm"><button type="button" class="btn btn-success" onclick="confirmarCompra()">Confirms order</button></span>'
    tbody.innerHTML += total + botonCancel + botonConfirm;
    document.getElementById("ofertaProductos").className = "hidden"
    orderDetail.className = "show"

}

function confirmarCompra(){
    console.log(productosCarrito);
}

function cancelarCompra(){
    productosCarrito = new Array();
    cantidadProductosAgregados = 0;
    cantidadDifenrentesProductosAgregados = 0;

    showOrderDetail();
}

function showBurgers(){

    let elemento = document.getElementById("ofertaProductos")
    let titulo = document.getElementById("tituloOfertaProductos")
    titulo.innerHTML = burgers.name

    elemento.innerHTML = ""
    elemento.className = "row"

    burgers.products.forEach(element => {
        let name, description, price, image 
        name = element.name
        description = element.description
        price = element.price
        image = element.image

        let inicioDiv = '<div class="col-lg productoOfertado">';
        let imagen = '<img class="imagenProductoOfertado" src="' +image+ '" alt="imagenBurger">'
        let nombre = '<p id="nameProduct" class="negrilla">' + name +'</p>'
        let descripcion = '<p>'+description +'</p>'
        let precio = '<p id="priceProducto" class="negrilla">$'+ price+ '</p>'
        let boton = '<button type="button" class="btn btn-dark" onclick="addCar(\''+titulo.innerHTML+ '\',\'' + name+ '\')">Add to car</button>'
        let finDiv = '</div>'

        elemento.innerHTML += inicioDiv + imagen + nombre + descripcion + precio + boton + finDiv;

    })
}

function showTacos(){

    let elemento = document.getElementById("ofertaProductos")
    let titulo = document.getElementById("tituloOfertaProductos")
    titulo.innerHTML = tacos.name;

    elemento.innerHTML = "";
    elemento.className = "row"

    tacos.products.forEach(element => {
        let name, description, price, image 
        name = element.name
        description = element.description
        price = element.price
        image = element.image

        let inicioDiv = '<div class="col-lg productoOfertado">';
        let imagen = '<img class="imagenProductoOfertado" src="' +image+ '" alt="imagenTacos">'
        let nombre = '<p class="negrilla">' + name +'</p>'
        let descripcion = '<p>'+description +'</p>'
        let precio = '<p class="negrilla">$'+ price+ '</p>'
        let boton = '<button type="button" class="btn btn-dark" onclick="addCar(\''+titulo.innerHTML+ '\',\'' + name+ '\')">Add to car</button>'
        let finDiv = '</div>'

        elemento.innerHTML += inicioDiv + imagen + nombre + descripcion + precio + boton + finDiv;

    })

}

function showSalads(){

    let elemento = document.getElementById("ofertaProductos")
    let titulo = document.getElementById("tituloOfertaProductos")
    titulo.innerHTML = salads.name;

    elemento.innerHTML = "";
    elemento.className = "row"

    salads.products.forEach(element => {
        let name, description, price, image ;
        name = element.name
        description = element.description
        price = element.price;
        image = element.image;

        let inicioDiv = '<div class="col-lg productoOfertado">';
        let imagen = '<img class="imagenProductoOfertado" src="' +image+ '" alt="imagenTacos">'
        let nombre = '<p class="negrilla">' + name +'</p>'
        let descripcion = '<p>'+description +'</p>'
        let precio = '<p class="negrilla">$'+ price+ '</p>'
        let boton = '<button type="button" class="btn btn-dark" onclick="addCar(\''+titulo.innerHTML+ '\',\'' + name+ '\')">Add to car</button>'
        let finDiv = '</div>'

        elemento.innerHTML += inicioDiv + imagen + nombre + descripcion + precio + boton + finDiv;

    })

}

function showDrinks(){
    let elemento = document.getElementById("ofertaProductos")
    let titulo = document.getElementById("tituloOfertaProductos")
    titulo.innerHTML = drinks.name;

    elemento.innerHTML = "";
    elemento.className = "row"

    drinks.products.forEach(element => {
        let name, description, price, image ;
        name = element.name
        description = element.description
        price = element. price;
        image = element.image;

        let inicioDiv = '<div class="col-lg productoOfertado">';
        let imagen = '<img class="imagenProductoOfertado" src="' +image+ '" alt="imagenTacos">'
        let nombre = '<p class="negrilla">' + name +'</p>'
        let descripcion = '<p>'+description +'</p>'
        let precio = '<p class="negrilla">$'+ price+ '</p>'
        let boton = '<button type="button" class="btn btn-dark" onclick="addCar(\''+titulo.innerHTML+ '\',\'' + name+ '\')">Add to car</button>'
        let finDiv = '</div>'

        elemento.innerHTML += inicioDiv + imagen + nombre + descripcion + precio + boton + finDiv;

    })
}

function showDesserts(){
    let elemento = document.getElementById("ofertaProductos")
    let titulo = document.getElementById("tituloOfertaProductos")
    titulo.innerHTML = desserts.name;

    elemento.innerHTML = "";
    elemento.className = "row"

    desserts.products.forEach(element => {
        let name, description, price, image ;
        name = element.name
        description = element.description
        price = element. price;
        image = element.image;

        let inicioDiv = '<div class="col-lg productoOfertado">';
        let imagen = '<img class="imagenProductoOfertado" src="' +image+ '" alt="imagenTacos">'
        let nombre = '<p class="negrilla">' + name +'</p>'
        let descripcion = '<p>'+description +'</p>'
        let precio = '<p class="negrilla">$'+ price+ '</p>'
        let boton = '<button type="button" class="btn btn-dark" onclick="addCar(\''+titulo.innerHTML+ '\',\'' + name+ '\')">Add to car</button>'
        let finDiv = '</div>'

        elemento.innerHTML += inicioDiv + imagen + nombre + descripcion + precio + boton + finDiv;

    })
}





    
