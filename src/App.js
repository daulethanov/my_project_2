import React from 'react';
import './index.scss';
import Cards from './components/Cards';
import Header from './container/Header';


function App() {
  return (
    <div className="wrapper">
        <Header/>
       <Cards/>
    </div>
  );
}

export default App;
