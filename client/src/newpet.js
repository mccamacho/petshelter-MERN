import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class NewPet extends Component{
    constructor(props){
        super(props);
        this.state= {
            pet:{},
            errors:{},
            err:""
        }
    }
    addpet = e =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", this.state.pet)
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
    render(){
        return(
        <>

            <form onSubmit={this.addpet}>
            <h1>New Pet</h1>
                <div className="form-group">
                <input 
                    type="text" 
                    placeholder="Name"
                    onChange={this.changeName}
                /></div>
                {
                    this.state.errors.name ?
                    <span>{this.state.errors.name.message}</span>:
                    ""
                }
                {
                    this.state.err !== "" ?
                    <span className="text-danger">{this.state.err}</span> :
                    ""
                }<br/>
                <input 
                    type="text" 
                    placeholder="Type"
                    onChange={this.changeType}
                /><br/>
                {
                    this.state.errors.type ?
                    <span>{this.state.errors.type.message}</span>:
                    ""
                }<br/>
                <textarea 
                    rows= '5' cols='50' 
                    placeholder="Description"
                    onChange={this.changeDescription}
                /><br/>
                {
                    this.state.errors.description ?
                    <span>{this.state.errors.description.message}</span>:
                    ""
                }<br/>
                <ul>Skills:(optional)<br/>
                    <li>Skill 1:<input 
                        type="text" 
                        onChange={this.changeSkill1}
                    /></li><br/>
                    <li>Skill 2:<input 
                        type="text" 
                        onChange={this.changeSkill2}
                    /></li><br/>
                    <li>Skill 3:<input 
                        type="text" 
                        onChange={this.changeSkill3}
                    /></li>
                    
                </ul> 
                <input className="btn btn-secondary" id="addpet" type="submit"value="Add Pet"/><br/> 
                <button><Link to="/">Cancel</Link></button>
            </form>
        </>    
        );
    }
}

export default NewPet;