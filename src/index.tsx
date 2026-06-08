import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import Home from "./components/Home/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="fechamento-caixa" element={<App />}></Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>,
);
