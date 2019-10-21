import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class OnePet extends Component{
    constructor(props){
        super(props);
        this.state= {
            pet:{},
        }
    }
    componentDidMount(){
        
        let id=this.props.match.params._id;
        axios.get(`http://localhost:8000/api/pets/${id}`)
            
            .then(res => {
                console.log(res.data)
                this.setState({pet:res.data})
            })
            .catch(err => console.log(err));
            console.log(this.state)
    }
    Delete = e=> {
        let _id= this.props.match.params._id;
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
            .then(res =>{
                this.props.history.push("/");
            })
            .catch(err => console.log(err));

    }

    
    render(){
        return(
        <>
            <div className="onequote">
            <h1>Details about {this.state.pet.name}</h1>
            <p><strong>Type:&nbsp;</strong>{this.state.pet.type}</p>
            <p><strong>Description:&nbsp;</strong>{this.state.pet.description}</p>
            <p><strong>Skills:&nbsp;</strong></p>
            <p>{this.state.pet.skill1}</p><br/>
            <p>{this.state.pet.skill2}</p><br/>
            <p>{this.state.pet.skill3}</p><br/>
            {/* this button deletes from the database */}
            <button className="btn btn-success" onClick={() => this.Delete(this.state.pet._id)}>Adopt this Animal</button>
            </div>
        </>    
        );
    }
}

export default OnePet;