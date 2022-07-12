const iva = 1.21;

/*function add2 (price, price2) {
    return price + price2;
};

function discount (number) {
    return number / 2;
}

function ivaPrice (number) {
     return number * iva;
} */


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


function idSearch (id) { 
    let idS = id;
    const searchResult = artPieces.find((picture) => {
        return picture.id === idS});
    console.log(searchResult)
};

function nameSearch (name) { 
    let nameS = name;
    const searchResult = artPieces.find((picture) => {
        return picture.name === nameS});
    console.log(searchResult)
}; 

function priceSearch (price) { 
    let priceS = price;
    const searchResult = artPieces.find((picture) => {
        return picture.price === priceS});
    console.log(searchResult)
};


function idFilterHigher (id) {
    let idF = id
    const filterResult = artPieces.filter((picture) =>{ 
        return picture.id < idF});
    console.log(filterResult);
}; 

function idFilterLower (id) {
    let idF = id
    const filterResult = artPieces.filter((picture) =>{ 
        return picture.id > idF});
    console.log(filterResult);
}; 

function idFilterEqual (id) {
    let idF = id
    const filterResult = artPieces.filter((picture) =>{ 
        return picture.id = idF});
    console.log(filterResult);
}; 


const artPieces = []; 

let amount = parseInt(prompt('enter the amount of art piece'));
for (let id = 1; id <= amount; id++) {
    
    let name = prompt('enter the name of the art piece');
    let upName = name.toUpperCase();
    let cost = parseFloat(prompt('enter the cost of the art piece'));
    artPieces.push(new picture(id,upName,cost));

    
}
console.log(artPieces);
i = false;
while (i == false) {
let action = prompt('what do you want to make?').toUpperCase();

if (action == 'SEARCH') {
    let type = prompt('by what mode do you want to search?').toUpperCase();
    
    if (type == 'ID') {
        let idPrompt = parseInt(prompt('enter the id'))
        idSearch(idPrompt)
    
    } else if (type == 'NAME') {
        let namePrompt = prompt('enter the name');
        nameSearch(namePrompt)
    
    } else if (type == 'PRICE') {
        let pricePrompt = parseFloat(prompt('enter the price'));
        priceSearch(pricePrompt);
    }
}

else if (action == 'FILTER') {
    let type = prompt('by what mode do you want to filter?').toUpperCase();

    if (type == 'ID') {
        let filterId = prompt('enter the id')

        let filterWay = prompt('in wich way, higher, lower or equal?').toUpperCase();

        if (filterWay == 'HIGHER') {
            idFilterHigher(filterId);
            
        } else if (filterWay == 'LOWER') {
            idFilterLower(filterId);

        } else if (filterWay == 'EQUAL') {
            idFilterEqueal(filterId)
        }  
    }   else if (type == 'NAME') {
    let nameFilter = prompt('enter the name').toUpperCase();
    const filterResult = artPieces.filter((picture) => {
        picture.name.incluede (nameFilter)}); 
    console.log(filterResult)
    
    }   else if (type == 'PRICE') {
    let priceFilter = parseInt(prompt('enter the price'));
    let filterWay = prompt('in wich way, higher, lower or equal?').toUpperCase();

    if (filterWay == 'HIGHER') {
        const filterResult = artPieces.filter((picture) =>{ 
            return picture.id < priceFilter});
        console.log(filterResult);
        
    } else if (filterWay == 'LOWER') {
        const filterResult = artPieces.filter((picture) =>{ 
            return picture.id > priceFilter});
        console.log(filterResult);
    } else if (filterWay == 'EQUAL') {
        const filterResult = artPieces.filter((picture) =>{ 
            return picture.id = priceFilter});
        console.log(filterResult);
    } 
    }
// la idea es hacerlo para cada propiedad del objeto pero no creo que es necesario hacerlo al menos de momento por que sino ya se haria muy largo el codigo
} else if (action == 'TOTAL') {
    let total = artPieces.reduce((acc, picture) => acc + picture.price, 0);
        total = ivaPrice(total)
        console.log(total)
    
} else if (action == 'STOP') {
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
