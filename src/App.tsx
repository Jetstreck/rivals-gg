import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900/90">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-600/20"></div>
        <Navbar />
        <main className="relative w-full">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;