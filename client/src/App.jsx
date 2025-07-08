import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import { AdminRoutes } from "./routes/index.routes.js"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<AppLayout />} />
      </Routes>

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: { background: "#363636", color: "#fff" },
          success: { duration: 3000 },
          error: {
            duration: 5000,
            style: { background: "#ff4d4f", fontWeight: "500" },
          },
          loading: { duration: 8000 },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
