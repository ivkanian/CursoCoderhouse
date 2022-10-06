import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Counter from './components/Counter/Counter';
import Calculator from './components/Calculator/Calculator';
import Effect from './components/Effect/Effect';
import ItemCount from './components/ItemCount/ItemCount';

const handleOnAdd=()=>{
console.log('Funciona')
}

function App() {
    return(
  <div className='App'>
        <Navbar/>
        <ItemListContainer greeting={'Welcome'}/>
        <ItemCount stock={'Stock de 8'} Onadd={handleOnAdd}/>
        {/*<Counter/>
        <Calculator/>
    <Effect/>*/}
  </div>
    )
}

export default App;

