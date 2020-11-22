// import logo from './logo.svg';
import './App.css';
import data from './data/site_data.json';
import Intro from './components/Intro';
import ServiceCategory from './components/ServiceCategory';
import uuid from 'react-uuid'

function App() {
  return (
    <div key="main" className="App">
      <Intro key="intro" {...data.intro} />
      <div key="row" className="ServiceCategoryRow">
        {data.service_categories.map((category) => (
          <div key={uuid()} className="ServiceCategoryCol">
            <ServiceCategory category={category} services={data.services[category.name]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

