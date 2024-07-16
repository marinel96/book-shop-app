import React from 'react';
import Header from './components/Header';
import Login from "./components/Login";
import Register from "./components/Register";
import BookDetails from './components/BookDetails';




function App() {
  return (
    <div className="App">
    <>
      <Header></Header>
      <Login></Login>
      <Register></Register>
      <BookDetails></BookDetails>
    </>
    </div>
  );
}

export default App;
