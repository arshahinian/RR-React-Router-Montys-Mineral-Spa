
import './App.css';
import {BrowserRouter as Vector, Link,Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'

/* Bootstrap */
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath','Turkey Trot']

  return (
    <div className="App">
      
      <Vector>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>
          <Container>
            <Nav defaultActiveKey="/" variant='tabs' fill>
              <Nav.Item>
                <Nav.Link href="/">
                    <Link to="/">Home</Link>
                </Nav.Link>                
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"aboutPage"}>
                    <Link to="/about">About Us</Link>
                </Nav.Link>                
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"packagesPage"}>
                    <Link to="/packages">Our Packages</Link>
                </Nav.Link>                
              </Nav.Item>
            </Nav>
          </Container>
        </header>

        <div className="display" >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/packages" element={<Packages packages={packages} />} />              
            </Routes>
        </div>

        </Vector>        
    </div>
  );
}

export default App;





