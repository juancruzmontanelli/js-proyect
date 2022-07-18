const productos = []

fetch('./data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {

        productos.push( new picture(producto.id, producto.name, producto.img, producto.price))
            
        })
    })

    console.log(productos)