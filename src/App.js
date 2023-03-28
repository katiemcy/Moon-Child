import './styles/App.scss';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import UserSearch from './components/UserSearch';
import Credit from './components/Credit';
import ComingSoon from './components/ComingSoon'

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={ <UserSearch /> } />
          <Route path="/comingSoon" element={ <ComingSoon />} />
          <Route path="/credit" element={ <Credit /> } />
        </Routes>
      </main>
      
      <footer>
        <div className="wrapper">
          <p>© Designed & developed by Katie M. at Juno College 2023.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
