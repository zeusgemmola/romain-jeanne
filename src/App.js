import React from "react";
import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Convertisseur from "./components/Convertisseur";
import NotFound from "./components/NotFound";

const App = () => (
  <Routes>
    <Route
      path="/"
      element={
        <AppHeader>
          <Convertisseur />
        </AppHeader>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
