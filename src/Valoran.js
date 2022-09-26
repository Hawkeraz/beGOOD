import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// ---------- Routes ------------//
import Dash from "./pages/Dashboard";
//-------------------------------//

export default function Valoran() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dash/>} />
        <Route path='/Dashboard' element={<Dash/>} />
      </Routes>
    </BrowserRouter>
  );
}
