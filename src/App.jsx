import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/services"
            element={<Services />}
          />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;