const productos = [
    {
        id: '1',
        titulo: "Camiseta Personalizada",
        descripcion: "Crea tu propia camiseta con nuestro diseñador.",
        stock: 10,
        price: 25000,
        img: "https://i.postimg.cc/MTZMDmV6/20250902-2042-Camiseta-Floral-Personalizada-simple-compose-01k46ctreyeeh91sr4cfy9evje.png",
        category: "ofertas"
    },
    {
        id: '2',
        titulo: "Pantalón Personalizado",
        descripcion: "Diseña un pantalón a tu medida.",
        stock: 5,
        price: 20000,
        img: "https://i.postimg.cc/bJ6GFS9Q/20250902-2042-Jeans-Florales-Personalizados-simple-compose-01k46cv48jf559xge5jpt2qkak.png",
        category: "ofertas"
    },
    {
        id: '3',
        titulo: "Buzo Personalizada",
        descripcion: "Haz un buzo único con nuestro configurador.",
        stock: 8,
        price: 49000,
        img: "https://i.postimg.cc/ZYMB83Rm/20250902-2044-Buzo-Floral-Personalizado-simple-compose-01k46d0qdxfm8bxp84c54zv04k.png",
        category: "nuevas"
    },
];

export const getProductos = () => { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}