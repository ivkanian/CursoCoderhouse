
const games =[
    {
        id:'1',
        name:'God of War',
        price:400,
        category:'Ps5',
        img:'https://m.media-amazon.com/images/I/817y77i7EFL.jpg',
        stock:5,
        description:'Juega como Kratos en esta nueva aventura'
    },
    {
        id:'2',
        name:'New Super Mario',
        price:400,
        category:'Switch',
        img:'https://http2.mlstatic.com/D_NQ_NP_660456-MLA40918188819_022020-O.jpg',
        stock:5,
        description:'Disfruta como cuando eras niño con esta nueva aventura de Mario'
    },
    {
        id:'3',
        name:'Halo infinite',
        price:400,
        category:'Xbox',
        img:'https://m.media-amazon.com/images/I/811QTSH5K6L.jpg',
        stock:5,
        description:'Nueva aventura del jefe Maestro'
    }

]

export const getGames=()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(games)
        }, 3000)
    })
}

export const getGamesById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(games.find (game => game.id === id))
        }, 3000)
    })
}

export const getGamesByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(games.filter(game => game.category === categoryId))
        }, 500)
    })
}