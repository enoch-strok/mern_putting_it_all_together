import React from 'react';
import './App.css';
import PeopleInfo from './components/PeopleInfoComponent';

function App() {
  return (
    <div className="App">
      <PeopleInfo firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PeopleInfo firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <PeopleInfo firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/>
    </div>
      
  );
}

export default App;
