import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// ---------- Routes ------------//
import Dash from "./pages/Dashboard";
import Layout from "./components/layout/Layout";
import Blank from "./pages/Blank";
//-------------------------------//

export default function Valoran() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Blank/>} />
          <Route path='/home' element={<Dash/>} />
          <Route path='/analysis' element={<Blank/>} />
          <Route path='/champions' element={<Blank/>} />
          <Route path='/list' element={<Blank/>} />
          <Route path='/challenges' element={<Blank/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
