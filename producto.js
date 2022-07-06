class picture {
    constructor (id,name, cost, img) {
        this.id = id;
        this.name = name; 
        this.price = parseInt(cost);
        this.img = img;
        this.sold = false;
    
    }
    soldIt() {
        this.sold = true; 
    }
}
const artPieces = [];



let cart = document.getElementById('cart')


let add1 = document.getElementById('add_1'); 

add1.onclick = () => {
    const picture1 = new picture(1,'flying moon',13400)
    artPieces.push(picture1)


    console.log(picture1.name)
    console.log(picture1.img)
    console.log(picture1.price)
    console.log(artPieces)


        let contiener = document.createElement('div'); 
    
        contiener.innerHTML = `<div class="card_block wow animate__animated animate__bounceInLeft">
                                <h3>${picture1.name}</h3>
                                <h5>ARS$${picture1.price} </h5>
                                </div>`;
    cart.appendChild(contiener);
    

sessionStorage.setItem('cart',artPieces)

let sesionCart = sessionStorage.getItem('cart');

console.log(sesionCart);

};

let add2 = document.getElementById('add_2'); 



add2.onclick = () => {
    const picture2 = new picture(2,'waver',15200)
    artPieces.push(picture2)


    console.log(picture2.name)
    console.log(picture2.img)
    console.log(picture2.price)
    console.log(artPieces)


sessionStorage.setItem('cart',artPieces)

let sesionCart = sessionStorage.getItem('cart');

console.log(sesionCart);

    let contiener = document.createElement('div'); 

    contiener.innerHTML = `<div class="card_block wow animate__animated animate__bounceInLeft">
                            <h3>${picture2.name}</h3>
                            <h5>ARS$${picture2.price} </h5>
                            </div>`;
cart.appendChild(contiener);


}
