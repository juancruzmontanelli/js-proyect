const productos = []

const lista = document.querySelector('#listado')

fetch('./data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            console.log(producto)
        })
    })
