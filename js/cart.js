// definicion de variables 
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content 
const templateCarrito = document.getElementById('template-carrito').content
const fragment  = document.createDocumentFragment();


// defino mi carrito que va ser un objeto con objetos 
let carrito = {}; 

//con esta funcion de flecha cargo mis productos a mi pagina
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
}) 

// addeventlistener para activar la funcion addcarrito 
cards.addEventListener('click', e => {
    addCarrito(e)
})

// addeventlistener para activar la funcion btnaccion 
items.addEventListener('click', e => {
    btnAccion(e)
})

// este es un fetch de donde extraigo los productos 
const fetchData = async () =>  { 
    try{
        const res = await fetch('../data.json')
        const data = await res.json()
        console.log(data)
        pintarCards(data)
        
    }catch (error) {
        console.log(error)
    }
}


// funcion que pinta los productos
const pintarCards = data => {
    data.forEach(cards => {
        templateCard.querySelector('h5').textContent = cards.title
        templateCard.querySelector('p').textContent  = cards.precio
        templateCard.querySelector('img').setAttribute('src', cards.thumbnailUrl)
        templateCard.querySelector('button').dataset.id = cards.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

// funcion que agruega los productos al carrito

const addCarrito = e => { 
    // console.log(e.target)
    // console.log(e.target.classList.contains('btn-dark'))

    if(e.target.classList.contains('button')) {
        setCarrito(e.target.parentElement)
    }

    e.stopPropagation()  // para evitar cualquier otro evento que se pueda generar
}



// esta funcion es para que guarde en producto la info del producto
const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('button').dataset.id,
        title: objeto.querySelector('h5').textContent, 
        precio: objeto.querySelector('p').textContent, 
        cantidad: 1 
        }
        
        // esto para que sume la cantidad que esta ordenando 
        if(carrito.hasOwnProperty(producto.id)) {
            producto.cantidad = carrito[producto.id].cantidad + 1
        }
        carrito[producto.id] = {...producto}
        
        Toastify({

            text: 'you add to the cart',
            
            duration: 3000
            
            }).showToast();

    pintarCarrito()
}  


// esta funcion pinta en el carrito el producto que se quiere agruegar
const pintarCarrito = () => {
   //console.log(carrito)

    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
        
        //botones
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)


    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}


// esta funcion calcula el precio y la cantidad, tambien en caso del carrito estar vacio mustra un mensaje
const pintarFooter = () => {

    // esto reinicia el footer
    footer.innerHTML = ''

    if(Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío</th>
        `
        return
    }
    const nCantidad = Object.values(carrito).reduce((acc,{cantidad}) => acc + cantidad ,0) 

    const nPrecio = Object.values(carrito).reduce((acc,{cantidad, precio}) => acc + cantidad * precio, 0) 


    
    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)

    fragment.appendChild(clone)
    footer.appendChild(fragment)


    // boton que vacia el carrito
    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        Toastify({

            text: 'you delete the cart',
            
            duration: 3000,

            style: {
                background: 'linear-gradient(to right, #F0200F, #F95B4E)'
            }
            
            
            }).showToast();
        pintarCarrito()
    })

    // cumple la misma funcion que vaciar, compras los productos
    const btnComprar = document.getElementById('comprar-carrito')
    btnComprar.addEventListener('click', () => {
        carrito = {}

        Toastify({

            text: 'you bought the cart',
            
            duration: 3000,

            style: {
                background: 'linear-gradient(to right, #72CC8F, #96c92d)'
            }
            
            
            }).showToast();

        pintarCarrito()
    })
}


// funcion que aumenta la cantidad de un producto con un boton
const btnAccion = e => {
    
    // accion aumentar o disminuye
    if(e.target.classList.contains('btn-info')) {
        console.log(carrito[e.target.dataset.id])
        

        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}

        
        pintarCarrito()
        
        Toastify({

            text: 'you add one more to the cart',
            
            duration: 3000
            
            }).showToast();

    }

    if(e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--

        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }

        Toastify({

            text: 'you delete one of the cart',
            
            duration: 3000,

            style: {
                background: 'linear-gradient(to right, #F0200F, #EC8A82)'
            }
            
            }).showToast();

        pintarCarrito()
    }

    e.stopPropagation()
}