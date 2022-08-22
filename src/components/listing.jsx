import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import axios from "axios";


const Listing = ({getData, sendShip}) => {
    console.log(getData);
    const [shipname, setShipName] = useState([]);

    const nameShip = () =>{
        axios.get(sendShip)
            .then (resp =>{
                console.log({...resp.data})
                if ({...resp.data.name}== [undefined]){
                    setShipName("no ship!")
                }
                else setShipName({...resp.data})
            })


    }


    return(
        <React.Fragment>
            <Container>
                <Table>
                <thead>
                    <tr>
                        <th> Name : </th>
                        <th> Height : </th>
                        <th> Hair Color : </th>
                        <th> Birth Day : </th>
                        <th onClick={e=>nameShip()} style={{cursor:'pointer',color:'red'}}  > Starships : </th>
                    </tr>
                    

                </thead>
                <tbody>
                    <tr>
                        <td>{getData.name}</td> 
                        <td>{getData.height}</td> 
                        <td>{getData.hair_color}</td> 
                        <td>{getData.birth_year}</td> 
                        <td>{shipname.name}</td> 
                    </tr>
                    
                </tbody>
                </Table>
            </Container>
            
        </React.Fragment>
        


    );
}

export default Listing;