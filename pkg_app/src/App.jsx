import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
// import Header from "./components/Header"
// import Main from "./components/Main"
// import Footer from "./components/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Sparql from "./pages/Sparql";
import Documentation from './pages/Documentation';
import Nodes from './pages/Nodes'
import Relationships from './pages/Relationships'
import Sources from './pages/Sources'

function App() {

  return (
    // <div>
    //   <Header />
    //   <Main />
    //   <Footer />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sparql" element={<Sparql />} />
          <Route path="/nodes" element={<Nodes />} />
          <Route path="/relationships" element={<Relationships />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
