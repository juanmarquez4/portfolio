import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
// import About from './components/About';
// import Contact from './components/Contact';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Juan Marquez',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Be ',
        subTilte: 'Making different projects',
        text: 'See my work'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Get in touch'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container fluid className='p-0' >
          {/* <NavigationBar/> */}
          <Routes>
            <Route 
             path='*'
             element={<HomePage/>}/>
             {/* <Route 
             path='/about'
             element={<AboutPage/>}/>
             <Route 
             path='/contact'
             element={<ContactPage/>}/> */}
          </Routes>
          <Footer/>
        </Container>
      </Router>
      
  
      
    );
  }

}

export default App;
