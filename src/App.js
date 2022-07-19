import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./Routes/Router";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default App;
