//Imports
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

//The content component is what initially greets the user, it serves as the home screen with a carousel showing off some Jerseys
class Content extends Component {
  render() {
    return (
      <div>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100" src="https://store.miseleccion.us/content/ws/all/44ed233b-9dc0-4473-bb52-90071994b0af.jpg" alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://4.bp.blogspot.com/-WYqkz-Qu4oo/UPqOuSRqw_I/AAAAAAAAPxA/GptQEIDTHSw/s1600/mosaic.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://3.bp.blogspot.com/-uihFZPmFfA8/XX4UM9bkm_I/AAAAAAACFfQ/XCSfbX3qmRAkEanBVySVnz6qbCbTfaYYwCNcBGAsYHQ/s1600/000.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default Content;