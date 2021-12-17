//Imports
import React, { Component } from 'react';
import Jerseys from './jerseys';
import axios from 'axios';

//The read component is what takes the created jerseys which are stored in the database and displays them on the page
class Read extends Component
{
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/jerseys')
        .then((response)=>{
            this.setState({myjerseys: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/jerseys')
        .then((response)=>{
            this.setState({myjerseys: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        myjerseys: []            
    };

    render(){
        return(
            <div>
                <h1>These are the jerseys you added to the database!</h1>
                <Jerseys kits={this.state.myjerseys} ReloadData={this.ReloadData}></Jerseys>
            </div>
        );
    }
}
export default Read;