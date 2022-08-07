
let arreglo = [ { name: "lucas", edad: 20 }, { name: "santi", edad: 22 } ]; 


function l(arr, prop) {
    let nuevoArr = []; 
    for(let i = 0; i < arr.length; i++) {
        let obj = {}
        obj[prop] = arr[1].prop;
        nuevoArr.push(obj);
    }
    return nuevoArr; 
};

console.log(l(arreglo,"name"));


function nA (number) {
    let newA = []; 
    for(let i = 0; i < number; i++) {
        newA[i] = i + 1; 
    }
    return newA; 
}

console.log(nA(5));


