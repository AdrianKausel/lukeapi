import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Listing from './components/listing';
import NavBar from './components/navbar';
import NavContext from './context/NavContext'
import ListingId from './components/listingid'
import {Routes, Route} from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
import {useEffect} from 'react';

function App() {

  const [titulo, setTitulo] = useState("Menu")
  const [numerito, setNumerito] = useState ()
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [shipdata,setShipData] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home')
}, []); 

  const add = (obj) => {
    setData(obj);
    
  }

  const add2= (obj) => {
    setData2(obj)
    navigate("/listing")

  }
  const shipName = (obj) =>{
    setShipData(obj)
  }
  return (
    <Container>

        
        <NavContext.Provider value={{titulo, setTitulo, numerito, setNumerito}}>
        <Routes>
        <Route path="/home/" element={<><NavBar addData={add} addData2={add2} nombreNave={shipName} /><Listing getData={data} sendShip={shipdata} /></>}/>
        <Route path="/listing/" element={<ListingId getData2={data2} />}/>
        </Routes>

        </NavContext.Provider>
        

    </Container>
  );
}

export default App;
