// import logo from './logo.svg';
import './App.css';
import data from './data/site_data.json';
import Intro from './components/Intro';
import Service from './components/Service';

function App() {
  const { intro, categories, services } = data;
  return (
    <div className="App">
      <Intro {...intro} />
      {services.map((service) => (
        <Service {...service} />
      ))}
    </div>
  );
}

export default App;
