import './styles/App.scss';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import UserSearch from './components/UserSearch';
import Credit from './components/Credit';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={ <UserSearch /> } />
        <Route path="/credit" element={ <Credit /> } />
      </Routes>
      
    </div>
  );
}

export default App;
