import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./Routes/Router";
import ScrollBar from "./components/ScrollBar";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setScroll(true) : setScroll(false);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Router />
      </div>
      <Footer />
      {scroll ? <ScrollBar /> : null}
    </>
  );
}

export default App;
