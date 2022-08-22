import React from "react";
import { Container, Table } from "react-bootstrap";
import {Route, Routes,Link} from 'react-router-dom';

const LisitngId = ({getData2}) => {

    return (

        <React.Fragment>
                <Routes>
                <Route path="/listing/"/>
                </Routes>
            <Container>
                <Link to='/home'> Back with the force!</Link>
                <Table>
                    <thead>
                        <tr>
                            <th> Name: </th>
                            <th> Height: </th>
                            <th> Hair color:</th>
                            <th> Birthday: </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{getData2.name}</td> 
                            <td>{getData2.height}</td> 
                            <td>{getData2.hair_color}</td> 
                            <td>{getData2.birth_year}</td> 
                        </tr>
                    </tbody>

                </Table>


            </Container>
            
        </React.Fragment>

    )
}

export default LisitngId;