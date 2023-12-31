import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListingProduct from "./ListingProduct";
import DetailProduct from "./DetailProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListingProduct />} />
          <Route path="/detail-product/:code" element={<DetailProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
