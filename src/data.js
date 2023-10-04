
const productos = [
    {
        id: '1',
        producto: 'Vino',
        precio: 3400,
        categoria: 'tinto',
        img: 'https://tse1.mm.bing.net/th?id=OIP.DTgI8GgTMeK32YoejoelnQHaHa&pid=Api&P=0&h=180',
        stock: '33',
        bodega: 'Catena Zapata',
        descripcion: 'Vino Malbec de bodegas Catena Zapata'
    },
    {
        id: '2',
        producto: 'Vino',
        precio: 3500,
        categoria: 'blanco',
        img: 'https://tse2.mm.bing.net/th?id=OIP.1UyKchbEDly2I45uYPwI4wHaQy&pid=Api&P=0&h=180',
        stock: '29',
        bodega: 'Bianchi',
        descripcion: 'Vino Malbec de bodegas Bianchi'
    },
    {
        id: '3',
        producto: 'Vino',
        precio: 5500,
        categoria: 'espumante',
        img: 'https://tse2.mm.bing.net/th?id=OIP.REL7OZUnjquhxjIwkLBtgwHaHa&pid=Api&P=0&h=180',
        stock: '25',
        bodega: 'Catena',
        descripcion: 'Vino espumante de bodegas Catena Zapata'
    },
    {
        id: '4',
        producto: 'Vino',
        precio: 1500,
        categoria: 'espumante',
        img: 'https://tse1.mm.bing.net/th?id=OIP.5T3vPMqo63XSeH12dC2enwHaHa&pid=Api&P=0&h=180',
        stock: '40',
        bodega: 'El Esteco',
        descripcion: 'Vino de mesa espumante de bodegas El Esteco'
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductobyId = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        }, 500)
    })
}

export const getProductosByCategory = (productoCategoria) => {
    console.log(productoCategoria);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === productoCategoria))            
        }, 500);
    })
}
