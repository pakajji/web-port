import './App.css';
import Navbar from '../Navbar/Navbar';
import Work from '../Work/Work';
import MySkill from '../MySkill/MySkill';
import MyProjects from '../MyProjects/MyProjects';
import Contact from '../Contact/Contact';
import PortContext from '../Context/PortContext';
import { useContext } from 'react';

function App() {
  const {background} = useContext(PortContext);
  console.log(background)
  return (
    <div className={`App ${background}`}>
      <Navbar/>
      <Work/>
      <MySkill/>
      <MyProjects/>
      <Contact/>
    </div>
  );
}

export default App;
