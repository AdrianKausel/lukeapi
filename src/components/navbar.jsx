import React from "react";
import {Container, Nav, Navbar, NavDropdown, Form, Button} from 'react-bootstrap'
import { useContext} from "react";
import NavContext from "../context/NavContext";
import axios from "axios";



const NavBar = ({addData, addData2, nombreNave}) => {
    const context = useContext(NavContext)


    const searchApi = () =>
    axios.get(`https://swapi.dev/api/${context.titulo}/${context.numerito}`)
        .then (resp => {
                nombreNave(resp.data.starships[0])
                addData({...resp.data})
            }) 


    const searchApi2 = () =>
    axios.get(`https://swapi.dev/api/${context.titulo}/${context.numerito}`)
        .then (response => {
                    addData2({...response.data})
            })


    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Search For:</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title={context.titulo} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={e=> context.setTitulo("people")} >People</NavDropdown.Item>
                            <NavDropdown.Item onClick={e=> context.setTitulo("movies")} >Movies</NavDropdown.Item>
                            <NavDropdown.Item onClick={e=> context.setTitulo("vehicles")} >Vehicles</NavDropdown.Item>
                            <NavDropdown.Item onClick={e=> context.setTitulo("starships")} >Starships</NavDropdown.Item>
                            <NavDropdown.Item onClick={e=> context.setTitulo("species")} >Species</NavDropdown.Item>
                            <NavDropdown.Item onClick={e=> context.setTitulo("planets")} >Planets</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control select="number" onSelect={e=> context.setNumerito(e.target.value) } placeholder="Search" aria-label="Search"/>
                        <Button onClick={e=> searchApi()} variant="outline-success">Search</Button>
                        
                        <Button onClick={e=> searchApi2()} variant="outline-success">See on detail</Button>
                    </Form>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
                        
    );
}

export default NavBar;