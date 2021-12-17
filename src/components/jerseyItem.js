//Imports
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// some comments
class JerseyItem extends Component {
    constructor() {
        super();
        this.Deletejersey = this.Deletejersey.bind(this);
    }

    //This deletes the jersey from the database 
    Deletejersey() {
        console.log('Delete: ' + this.props.jersey._id);

        axios.delete('http://localhost:4000/api/jerseys/' + this.props.jersey._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();

    }

    render() {
        //This is the actual visual representation of the data the user submitted, showing the player name, team and and Image, there is also 2 buttons to either edit or delete the jersey
        return (
            <div>
                {/* some comments  */}
                <Card>
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <blockquote>
                         <h2>   {this.props.jersey.Name}</h2>

                            <h3> {this.props.jersey.Team}</h3>
                            <img src={this.props.jersey.Image} width="250" height="250"></img>
                            <footer>

                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.jersey._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.Deletejersey}>Delete</Button>
                </Card>
            </div>
        );
    }
}
export default JerseyItem;