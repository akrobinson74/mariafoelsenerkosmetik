// import logo from './logo.svg';
import './App.css';
import data from './data/site_data.json';
import Intro from './components/Intro';
import ServiceCategory from './components/ServiceCategory';
import { Col, Container, Row, Table } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <ul className="ServiceCategoryRow">
        {data.service_categories.map((category) => (
          <li className="ServiceCategoryCol">
            <ServiceCategory category={category} services={data.services[category.name]} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

