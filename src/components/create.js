//Imports
import React, { Component } from 'react';
import axios from 'axios';

//The Create component allows the user to actually input the data and that data gets stored on the server 
class Create extends Component {
    //Constructor to allow for the user to make many instances of the jerseys
    constructor() {
        super();//Allows user to use the form required to input data

        //Binds the onChange methods for all the data
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeJerseyName = this.onChangeJerseyName.bind(this);
        this.onChangeJerseyTeam = this.onChangeJerseyTeam.bind(this);
        this.onChangeJerseyNumber = this.onChangeJerseyNumber.bind(this);
        this.onChangeJerseyImage = this.onChangeJerseyImage.bind(this);
        this.state = {
            Name: '',
            Team: '',
            Number: '',
            Image: ''
        }
    }

    handleSubmit(event) {
        console.log("Name: " +this.state.Name+
        " Team: " + this.state.Team +
        " Number: " + this.state.Number +
        " Image: " + this.state.Image);

        const NewJersey = {
            Name: this.state.Name,
            Team: this.state.Team,
            Number: this.state.Number,
            Image: this.state.Image
        }

        //Stores the NewJersey in the database at the url below
        axios.post('http://localhost:4000/api/jerseys', NewJersey)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err);
        })

        axios.put('http://localhost:4000/api/jerseys/' + this.state._id, NewJersey)
        .then((response)=>{console.log(response)})
        .catch();

        event.preventDefault();
        this.setState({
            Name: '',
            Team: '',
            Number: '',
            Image: ''
        });
    }
    //Allows the data input by the user to be stored and handled
    onChangeJerseyName(event) {
        this.setState({
            Name: event.target.value
        })
    }
    onChangeJerseyTeam(event) {
        this.setState({
            Team: event.target.value
        })
    }
    onChangeJerseyNumber(event){
        this.setState({
            Number: event.target.value
        })
    }
    onChangeJerseyImage(event){
        this.setState({
            Image: event.target.value
        })
    }

    render() {
        //The form below asks the user for the data and the user will type their information into the input boxes given, that updates the onChange_____ methods above
        return (
            <div>
                <h1>Add a Jersey to the Database</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Jersey Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeJerseyName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Jersey Team: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Team}
                            onChange={this.onChangeJerseyTeam}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Jersey Number: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Number}
                            onChange={this.onChangeJerseyNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Jersey Image: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Image}
                            onChange={this.onChangeJerseyImage}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Add Jersey"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Create;