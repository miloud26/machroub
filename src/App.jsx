import { Routes, Route, useNavigate } from "react-router-dom";
import React, { lazy, useEffect, startTransition, Suspense } from "react";


const Machroub = lazy(() => import("./Machroub.jsx"));

const Error = lazy(() => import("./components/Error"));

const App = () => {
  const navigate = useNavigate();
  const url = localStorage.getItem("baseURL");

  useEffect(() => {
    if (url && (window.location.pathname ==="/" || window.location.pathname ==="/products" || window.location.pathname ==="/products/")) {
      startTransition(() => {
        navigate(url);
      });
    }
  }, [url, navigate]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<Error />} />
       
        <Route path="/products/machroub" element={<Machroub />} />
        
      </Routes>
    </Suspense>
  );
};

export default App;
