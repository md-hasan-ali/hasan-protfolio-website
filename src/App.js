import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import MyProject from './components/MyProject/MyProject';

function App() {
  return (
    <div >
      <Header></Header>
      <Banner></Banner>
      <MyProject></MyProject>
      <Contact></Contact>
    </div>
  );
}

export default App;
