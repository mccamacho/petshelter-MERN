import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditPet extends Component{
    constructor(props){
        super(props);
        this.state= {
            pet:{
                name:"", 
                type:"", 
                description:"", 
                skill1:"", 
                skill2:"", 
                skill3:""
            }, 
            errors:{},
            err:""
        }
    }
    componentDidMount(){
        let id=this.props.match.params._id;
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => this.setState({pet:res.data}))
            .catch(err => console.log(err));
    }
    changeName = e =>{
        this.setState({pet: {...this.state.pet, name:e.target.value}});
    }
    changeType = e =>{
        this.setState({pet: {...this.state.pet, type:e.target.value}});
    }
    changeDescription = e =>{
        this.setState({pet: {...this.state.pet, description:e.target.value}});
    }
    changeSkill1 = e =>{
        this.setState({pet: {...this.state.pet, skill1:e.target.value}});
    }
    changeSkill2 = e =>{
        this.setState({pet: {...this.state.pet, skill2:e.target.value}});
    }
    changeSkill3 = e =>{
        this.setState({pet: {...this.state.pet, skill3:e.target.value}});
    }
    editPet = e => {
        e.preventDefault();
        let _id = this.props.match.params._id;
        // console.log(this.state.pet)
        axios.put(`http://localhost:8000/api/pets/${_id}/edit`, this.state.pet)
        .then(res => {
            if(res.data.errors){  
                this.setState({errors: res.data.errors});
            }else if(res.data.errmsg){
                this.setState({err: res.data.errmsg});
            }
            else{
                this.props.history.push("/");
            }
        })
        .catch(err => console.log(err));
      }
    render(){
        return(
        <>

            <form onSubmit={this.editPet}>
            <h1>Update Pet</h1>
                
                <input 
                    type="text" 
                    value={this.state.pet.name}
                    onChange={this.changeName}
                /><br/>
                {
                    this.state.errors.name ?
                    <span>{this.state.errors.name.message}</span>:
                    ""
                }<br/>
                {
                    this.state.err !== "" ?
                    <span className="text-danger">{this.state.err}</span> :
                    ""
                }<br/>
                
                <input className="m-2"
                    type="text" 
                    value={this.state.pet.type}
                    onChange={this.changeType}
                /><br/>
                {
                    this.state.errors.type ?
                    <span>{this.state.errors.type.message}</span>:
                    ""
                }<br/>
                <textarea 
                    rows= '5' cols='50' 
                    value={this.state.pet.description}
                    onChange={this.changeDescription}
                /><br/>
                {
                    this.state.errors.description ?
                    <span>{this.state.errors.description.message}</span>:
                    ""
                }<br/>
                <ul>Skills:(optional)
                    <li>Skill 1:&nbsp;<input 
                        type="text" 
                        value={this.state.pet.skill1}
                        onChange={this.changeSkill1}
                    /></li>
                    <li>Skill 2:&nbsp;<input 
                        type="text" 
                        value={this.state.pet.skill2}
                        onChange={this.changeSkill2}
                    /></li>
                    <li>Skill 3:&nbsp;<input 
                        type="text" 
                        value={this.state.pet.skill3}
                        onChange={this.changeSkill3}
                    /></li>
                    
                </ul> 
                <input className="btn btn-secondary" type="submit"value="Update Pet"/>
                <button><Link to="/">Cancel</Link></button>
            </form>
        </>    
        );
    }
}

export default EditPet;