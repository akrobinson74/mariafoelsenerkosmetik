// import logo from './logo.svg';
import './App.css';
import data from './data/site_data.json';
import Intro from './components/Intro';
import ServiceCategory from './components/ServiceCategory';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (

    <Container className="App">
      <Row>
        <Col xl={3}><Intro {...data.intro} /></Col>
      </Row>
      <Row>
        {data.service_categories.map((category) => (
          <Col lg><ServiceCategory category={category} services={data.services[category.name]} /></Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
