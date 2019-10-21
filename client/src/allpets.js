import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AllPets extends Component{
    constructor(props){
        super(props);
        this.state= {
            pets:[] 
        }
    }
    

    componentDidMount(){
        axios.get("http://localhost:8000/api/pets")
            .then(res =>
                this.setState({pets:res.data}))
            .catch(err => console.log(err));
    }

    render(){
        return(
        <>
            <h2>All pets</h2>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                </thead>
            {   
                this.state.pets.map(pet =>
                <tbody key={pet._id}>
                <tr>
                    
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td>
                        <Link className="btn btn-warning" to={`/pets/${pet._id}/edit`}>Edit</Link>&nbsp;
                        <Link className="btn btn-light" to={`/pets/${pet._id}`}>Details</Link>
                        
                    </td>
                </tr>
                </tbody>
                )
            }
            </table>
        </>    
        );
    }
}

export default AllPets;