//Imports
import React, { Component } from 'react';
import JerseyItem from './jerseyItem';

class Jerseys extends Component
{
    render(){
            return this.props.kits.map((kit)=>{
            return <JerseyItem jersey={kit} key={kit._id} ReloadData={this.props.ReloadData}></JerseyItem>
        })
    }
}
export default Jerseys;