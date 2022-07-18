
class picture {
    constructor (id,name, cost, img) {
        this.id = id;
        this.name = name; 
        this.price = parseFloat(cost);
        this.img = img
        this.sold = false;
    
    }
    soldIt() {
        this.sold = true; 
    }
}



let total = document.getElementById('total');


let contenedorProductos = document.getElementById('productos');
const cartProducts = [];

const productos = [new picture(1,'flying moon',13400,'file:///C:/Users/Sansung/OneDrive/Escritorio/cacu/javascritp/proyecto%20final%20-%203/img/flying_moon.jpg'), new picture(2,'waver',15200, 'file:///C:/Users/Sansung/OneDrive/Escritorio/cacu/javascritp/proyecto%20final%20-%203/img/raven_water_color.jpeg')]; 

function mostrarCarts() {
for (let producto of productos) {
    contenedorProductos.innerHTML += `<div class=" card_block wow animate__animated animate__bounceInLeft">
                                        <img src=${producto.img}>
                                        <h3 class="content">${producto.name}</h3>        
                                        <h5 class="content">ARS$ ${producto.price}</h5>
                                        <button type="submit" onclick="agregarProducto(this)"id="${producto.id}">add to the cart</button>
                                    </div>`
}
}
mostrarCarts(productos)

let cartChild = document.getElementById('cartChild')    

function agregarProducto(producto) {
    let id = producto.id;
    for (const data of productos) {

        if (id == data.id) {
            console.log(data);
            cartProducts.push(data); 
            console.log(cartProducts); 
            
            empty.remove();
            cartChild.innerHTML += `<div class=" card_block wow animate__animated animate__bounceInLeft">
                                                <img src=${data.img}>
                                                <h3 class="content">${data.name}</h3>        
                                                <h5 class="content">ARS$ ${data.price}</h5>
                                            </div>`    
            
            const totalBuy = cartProducts.reduce ((acc, the) => acc + the.price, 0)

            console.log(totalBuy)

            total.innerHTML = `<div class="flex_card" id="total">
                                <h2>ARS$ ${totalBuy} </h2>
                                </div>
                                `


        }
    }
    Toastify({

        text: 'This is a toast',
        
        duration: 3000
        
        }).showToast();

        
    
        
};






let empty = document.getElementById('empty');


cartProducts.length === 0 && (empty.innerHTML = '<h2>The cart is empty</h2>');







let buy = document.getElementById('buy');

lettry = document.getElementById('try');


buy.addEventListener('click', (event) =>   {
    event.preventDefault();
    
    total.remove(); 
    empty.remove()
    cartChild.innerHTML = '<h2>Buy competed!</h2>'
    Toastify({

        text: "the buy is completed",
        
        duration: 3000 , 

        style: {
            background: 'linear-gradient(to right, #72CC8F, #96c92d)'
        }
        
        }).showToast();
    

});


let example = document.getElementById('try');

example.addEventListener('click',() => { 
    Toastify({

        text: "This is a toast",
        
        duration: 3000
        
        }).showToast();
    
})


