import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'

const ItemList = ({games, setPage}) => {
    console.log(games)

  return (<div className='gamelist'>
    {games.map(game=> <Item key ={game.id} {...game} setPage={setPage}/>)}
    </div>
  )
}

export default ItemList


