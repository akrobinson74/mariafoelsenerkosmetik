// import logo from './logo.svg';
import './App.css';
import data from './data/site_data.json';
import Intro from './components/Intro';
import ServiceCategory from './components/ServiceCategory';
import { Col, Container, Row, Table } from 'react-bootstrap';

function App() {
  //   <Row>
  //   <Col xl={3}><Intro {...data.intro} /></Col>
  // </Row>
  //   <Table striped bordered hover size="sm">
  //   <Row>
  //     <Col>
  //     </Col>
  //   </Row>
  // </Table>

  return (
    <Container className="App">
      <Row className="ServiceCategoryRow">
        {data.service_categories.map((category) => (
          <Col className="ServiceCategoryCol">
            <ServiceCategory category={category} services={data.services[category.name]} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;

