
function plus (number) {
    return cartPrice.reduce((acc, number) => acc + number, 0)
}

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


function agregarProducto(comp) {
    let id = comp.id;
    for (const data of datos) {

        if (id == data.id) {c
            onsole.log(data);
            productosCarrito.push(Number(data)); 
            console.log(productosCarrito);             
        }
    }
}
let contenedorProductos = document.getElementById('productos');
const cartProducts = [];

const productos = [new picture(1,'flying moon',13400,'./img/flying moon.jpg'), new picture(2,'waver',15200)]; 
for (let producto of productos) {
    contenedorProductos.innerHTML += `<div class=" card_block wow animate__animated animate__bounceInLeft">
                                        <img src=${producto.img}>
                                        <h3 class="content">${producto.name}</h3>        
                                        <h5 class="content">ARS$ ${producto.price}</h5>
                                        <button type="submit" id="${producto.id}">add to the cart</button>
                                    </div>`
}

const cartPrice = [];
let cart = document.getElementById('cart')

let cartChild = document.getElementById('cartChild')

let empty = document.getElementById('empty');

let add1 = document.getElementById('add_1'); 

let emptyCart = document.createElement('h2');


emptyCart.innerText = 'The cart is empty'

cartProducts.length === 0 && empty.appendChild(emptyCart);



let total = document.getElementById('total');

let totalContainer = document.createElement('h2');

totalContainer.innerText = `ARS$ ${plus(...cartPrice)}`

total.append(totalContainer);



let contiener = document.createElement('div'); 


let add2 = document.getElementById('add_2'); 




/* add2.onclick = () => {
    const picture2 = new picture(2,'waver',15200)
    cartProducts.push(picture2)


    const {id, name, price, img,} = picture2

    cartPrice.push(price);
    totalContainer.innerText = `ARS$ ${plus(...cartPrice)}`;

    console.log(id)
    console.log(name)
    console.log(img)
    console.log(price)
    console.log(cart)



    contiener.innerHTML = `<div class="card_block wow animate__animated animate__bounceInLeft products">
                            <h3>${picture2.name}</h3>
                            <h5>ARS$${picture2.price} </h5>
                            </div>`;
cartChild.appendChild(contiener);


empty.remove();
total.append(totalContainer);

let artPiece_serialized = JSON.stringify(cartProducts)
sessionStorage.setItem('cart',artPiece_serialized)

let sesionCart = sessionStorage.getItem('cart');

console.log(sesionCart);


};
*/


let buy = document.getElementById('buy');

lettry = document.getElementById('try');


buy.onclick = (event) =>   {
    event.preventDefault();
    
    
    cartChild.innerHTML = '<h2>Buy competed!</h2>'
    contiener.remove()
    Toastify({

        text: "the buy is completed",
        
        duration: 3000 , 

        style: {
            background: 'linear-gradient(to right, #72CC8F, #96c92d)'
        }
        
        }).showToast();
    

};


let example = document.getElementById('try');

example.addEventListener('click',() => { 
    Toastify({

        text: "This is a toast",
        
        duration: 3000
        
        }).showToast();
    
})


