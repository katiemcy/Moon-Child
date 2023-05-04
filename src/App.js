import './styles/App.scss';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import UserSearch from './components/UserSearch';
import Credit from './components/Credit';
import ComingSoon from './components/ComingSoon';
import About from './components/About';

function App() {
  const [ clicked, setClicked ] = useState(false);

  const handleClick = () => {
    clicked
    ? setClicked(false)
    : setClicked(true)
  }

  return (
    <div className="App">
      <Header handleClick={handleClick}
              clicked={clicked} />

      <main>
        <Routes>
          <Route path="/" element={ <UserSearch /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/comingSoon" element={ <ComingSoon />} />
          <Route path="/credit" element={ <Credit /> } />
        </Routes>
      </main>
      
      <footer>
        <div className="wrapper">
          <p>© Designed & developed by Katie M. at Juno College 2023.</p>
        </div>
      </footer>
      
      <div className={clicked? "menuBg clicked" : "menuBg"}></div> 
    </div>
  );
}

export default App;
