// import logo from './logo.svg';
import './App.css';
import data from './data/site_data.json';
import Intro from './components/Intro';
import ServiceCategory from './components/ServiceCategory';

function App() {
  return (
    <div className="App">
      <Intro {...data.intro} />
      <div className="ServiceCategoryRow">
        {data.service_categories.map((category) => (
          <div className="ServiceCategoryCol">
            <ServiceCategory category={category} services={data.services[category.name]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

