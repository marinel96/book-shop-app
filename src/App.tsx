import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from "./components/Login";
import Register from "./components/Register";
import BookList from './components/BookList';





function App() {
  return (
      <Routes>
        <Route path='/BookList' element={<BookList/>}></Route>
        <Route path='' element={<Header/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='Loggin' element={<Login/>}></Route>
      </Routes>
  );
}

export default App;
