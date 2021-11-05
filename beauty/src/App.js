import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



import { useState } from "react";
import Landing from "./containers/landing";


function App() {
  return (
      <Router>
      <Routes>
      <Route path='/home' element={<Landing/>} />
          <Route path="/welcome" element={<h1>Hola Mundo</h1>} />
                <Route path='/*' element={<h1>404</h1>} />
        </Routes>
      </Router>
       
  );
}

export default App;
