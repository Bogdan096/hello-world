import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigate';
import Container from './components/Container';
import Button from './components/Button';

const Home = () => (
  <Container>
    <h1>Hello world!</h1>
    <Button onClick={() => alert('Button Clicked!')}>Click Me</Button>
  </Container>
);

const About = () => (
  <Container>
    <h1>About Page</h1>
  </Container>
);

const Contact = () => (
  <Container>
    <h1>Contact Page</h1>
  </Container>
);

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
