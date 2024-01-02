import React, { useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [filter, setFilter] = useState(null);

  return (
    <ChakraProvider>
      <Router>
        <NavBar setFilter={setFilter} />
        <Routes>

  <Route path="/" element={<Navigate to="/cafes" />} />
  <Route path="/cafes" element={<ItemListContainer greeting="Bienvenido a nuestra tienda de café" />} />
  <Route path="/tazas" element={<ItemListContainer greeting="Bienvenido a nuestra tienda de café" filterValue="tazas" />} />
  <Route path="/BigBox" element={<ItemListContainer greeting="Bienvenido a nuestra tienda de café" filterValue="BigBox" />} />
</Routes>

      </Router>
    </ChakraProvider>
  );
}

export default App;