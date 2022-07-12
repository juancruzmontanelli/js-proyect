
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

const cartProducts = [];

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

add1.onclick = () => {
    const picture1 = new picture(1,'flying moon',13400)
    cartProducts.push(picture1)

    const {id, name, price, img,} = picture1;

    cartPrice.push(price);
    totalContainer.innerText = `ARS$ ${plus(...cartPrice)}`;

    console.log(id)
    console.log(name)
    console.log(img)
    console.log(price)
    console.log(cart)


    
        contiener.innerHTML = `<div class="card_block wow animate__animated animate__bounceInLeft">
                                <h3>${picture1.name}</h3>
                                <h5>ARS$${picture1.price} </h5>
                                </div>`;
    cartChild.appendChild(contiener);
    
    
    empty.remove();

    total.append(totalContainer);
let artPiece_serialized = JSON.stringify(cartProducts)
sessionStorage.setItem('cart',artPiece_serialized)

let sesionCart = sessionStorage.getItem('cart');

console.log(sesionCart);

};

let add2 = document.getElementById('add_2'); 



add2.onclick = () => {
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



let buy = document.getElementById('buy');




buy.onclick = (event) =>   {
    event.preventDefault();
    
    let competedBuy= document.createElement('h2'); 

    competedBuy.innerText = 'Buy competed!';

    contiener.remove()
    
    cartChild.append(competedBuy);
};


