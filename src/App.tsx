import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from "./components/Login";
import Register from "./components/Register";
import BookList from './components/BookList';




// Specify the type for App component
function App() {
// Make sure to apply the filter functionality in two posible ways:
  // 1. HAndle the filterValue using useContext() hook 
  // 2. Handle the state at the parent of Header and BookList Components so you can share the state between these components (Careful!!!!, this is called prop drilling)
  // const [filterValue, setFilterValue] = useState("");
  return (
    // Protect the routes based on user role
    // Create a page which shows errors like "Page does not exist"
    // I recomend you to have a look at this scenario that we had before loader: checkAuthToken
    // Also Implement Child ROUTES, index routes
      <Routes>
        <Route path='/BookList' element={<BookList/>}></Route>
        <Route path='' element={<Header/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='Loggin' element={<Login/>}></Route>
      </Routes>
  );
}

export default App;
