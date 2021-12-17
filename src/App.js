//Importing all the various components of the application, and the UI elements bootstrap provides for routing and navigation
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Content from './components/content';
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';

//Create the App class where the routing is initially done through
class App extends Component{
  render(){
    //The routing of the app is done below through the bootstrap navbar, clicking on the elements will redirect the page to that component
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Display Collection</Nav.Link>
              <Nav.Link href="/create">Add Jersey</Nav.Link>
            </Nav>
        </Navbar>


<br />

        <Routes>
          <Route exact path="/" element={<Content/>}/>
          <Route exact path="/read" element={<Read/>}/>
          <Route exact path="/create" element={<Create/>}/>
          <Route exact path="/edit/:id" element={<Edit />}/>
        </Routes>



      </div>
    </Router>
    );
  }
}
export default App;
