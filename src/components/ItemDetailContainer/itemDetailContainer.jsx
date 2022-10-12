import { useState, useEffect } from 'react'
import { getGamesById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailContainer =() => {
    const [game, setGame] = useState([])
    const [loading, setLoading] = useState(true)
    const {gameId} = useParams()
      

    useEffect(() => {
        getGamesById(gameId).then(response => {
            setGame(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return  (
        <div>

         <ItemDetail key= {getGamesById.id} {...game}/>
           
        </div>
    )
}

export default ItemDetailContainer 