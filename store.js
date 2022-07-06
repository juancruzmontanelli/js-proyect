const iva = 1.21;

function add2 (price, price2) {
    return price + price2;
};

function discount (number) {
    return number / 2;
}

function ivaPrice (number) {
     return number * iva;
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

const artPieces = []; 

let amount = parseInt(prompt('enter the amount of art piece'));
for (let id = 1; id <= amount; id++) {
    
    let name = prompt('enter the name of the art piece');
    let upName = name.toUpperCase();
    let cost = parseFloat(prompt('enter the cost of the art piece'));
    artPieces.push(new picture(id,upName,cost));

    let cart = document.getElementById('cart')
    let contiener = document.createElement('div'); 


    contiener.innerHTML = `<button class="card_block wow animate__animated animate__bounceInLeft">
                            <img src="../img/flying moon.jpg" alt="raven">
                            <h3>${upName}</h3>
                            <h5>ARS$${cost} </h5>
                            </button>`;
cart.append(contiener);
    
}
console.log(artPieces);
i = false;
while (i == false) {
let action = prompt('what do you want to make?');
let upAction = action.toUpperCase();


if (upAction == 'SEARCH') {
    let type = prompt('by what mode do you want to search?');
    let upType = type.toUpperCase();
    if (upType == 'ID') {
        let idSearch = parseInt(prompt('enter the id'))
        const searchResult = artPieces.find((picture) => {
            return picture.id === idSearch});
        console.log(searchResult);
    
    } else if (upType == 'NAME') {
        let nameSearch = prompt('enter the name');
        let upNameSearch = nameSearch.toUpperCase();
        const searchResult = artPieces.find((picture) => {
            return picture.name === upNameSearch});
        console.log(searchResult)
    } else if (upType == 'PRICE') {
        let pricesearch = parseFloat(prompt('enter the price'));
        const searchResult = artPieces.find((picture) => {
            return picture.price === pricesearch});
        console.log(searchResult)
    }
}else if (upAction == 'FILTER') {
    let type = prompt('by what mode do you want to filter?');
    let upType = type.toUpperCase();
    if (upType == 'ID') {
        let idFilter = prompt('enter the id');
        let filterWay = prompt('in wich way, higher, lower or equal?');
        let upFilterWay = filterWay.toUpperCase();
        if (upFilterWay == 'HIGHER') {
            const filterResult = artPieces.filter((picture) =>{ 
                return picture.id < idFilter});
            console.log(filterResult);
            
        } else if (upFilterWay == 'LOWER') {
            const filterResult = artPieces.filter((picture) =>{ 
                return picture.id > idFilter});
            console.log(filterResult);
        } else if (upFilterWay == 'equal') {
            const filterResult = artPieces.filter((picture) =>{ 
                return picture.id = idFilter});
            console.log(filterResult);
        }  
    }   else if (upType == 'NAME') {
    let nameFilter = prompt('enter the name');
    let upNameFilter = nameFilter.toUpperCase();
    const filterResult = artPieces.filter((picture) => {
        picture.name.incluede (upNameFilter)}); 
    console.log(filterResult)
    
    }   else if (upType == 'PRICE') {
    let priceFilter = parseInt(prompt('enter the price'));
    let filterWay = prompt('in wich way, higher, lower or equal?');
    let upFilterWay = filterWay.toUpperCase();
    if (upFilterWay == 'HIGHER') {
        const filterResult = artPieces.filter((picture) =>{ 
            return picture.id < priceFilter});
        console.log(filterResult);
        
    } else if (upFilterWay == 'LOWER') {
        const filterResult = artPieces.filter((picture) =>{ 
            return picture.id > priceFilter});
        console.log(filterResult);
    } else if (upFilterWay == 'equal') {
        const filterResult = artPieces.filter((picture) =>{ 
            return picture.id = priceFilter});
        console.log(filterResult);
    } 
    }
// la idea es hacerlo para cada propiedad del objeto pero no creo que es necesario hacerlo al menos de momento por que sino ya se haria muy largo el codigo
} else if (upAction == 'TOTAL') {
    let total = artPieces.reduce((acc, picture) => acc + picture.price, 0);
        total = ivaPrice(total)
        console.log(total)
    
} else if (upAction == 'STOP') {
    i = true;
} else {
    alert('you need to enter an action');
}
}

/*
function add2 (price, price2) {
    return price + price2;
}
function discount (number) {
    return number / 2;
}
function ivaPrice (number) {
     return number * iva;
} 
let i = false
while(i == false) {
let amount = parseInt(prompt('enter the amount of art piece'));

if ((amount > 0) && (amount < 3)) {
    alert ('amount entred ' + amount );
    i = true;

    if (amount == 1) {
        let price = parseInt(prompt('enter the price of the art piece'));

        let total = ivaPrice (price);
        alert ('the price of the arte piece with iva is ARS$'+ total);
    } else {   

        let priceArt = parseInt(prompt('enter the price of the art piece'));
        let priceArt1 = parseInt(prompt('enter the price of the second art piece'));

        let total = add2 (priceArt, priceArt1);
        alert ('the price of the two arte piece are ARS$' + total);

        let discount1 = add2(priceArt, discount (priceArt1)); 
        alert ('the price of the two arte piece with the discount are ARS$'+ discount1);
        
        let priceIva = ivaPrice (discount1);
        alert ('the price of the two arte piece with iva are ARS$'+priceIva);
        
    }




} else {
    alert ('the amount need to be a number above 0 and under 3')
}
}*/
