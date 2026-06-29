import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles.ts";

import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";

import App from "./App.tsx";
import Home from "./components/Home/Home.tsx";
import Bloodletting from "./components/Bloodletting/Bloodletting.tsx";
import Dashboard from "./components/Dashboard/Dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="fechamento-caixa" element={<App />} />
        <Route path="sangria-de-caixa" element={<Bloodletting />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Analytics />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
);
