import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useEffect , useState } from 'react'
import { getGames, getGamesByCategory, getGamesById} from '../../asyncMock'


const ItemListContainer=({greeting})=>{
    const [games , setGames]= useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

  
    // useEffect(() => {
    //   getGames().then(respuesta=>{
    //    // console.log(respuesta)
    //     setGames(respuesta)
    //   }).finally(()=>{
    //     setLoading(false)
    //   })
    // }, [])
    useEffect(() => {
      setLoading(true)

      const asyncFunction = categoryId ? getGamesByCategory : getGames
      asyncFunction(categoryId).then(response => {
          setGames(response)
      }).catch(error => {
          console.log(error)
      }).finally(() => {
          setLoading(false)
      })
   }, [categoryId])
  
  
      //const gamesMapped=games.map(game=> <li>{game.img}</li>)
    if (loading){
      return <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340" alt="" />
      }

  return (
    <div>
      <h1>Listado de productos</h1>
      <ItemList games={games}/>
    </div>
  )

  }

export default ItemListContainer