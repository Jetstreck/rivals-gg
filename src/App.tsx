import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-blue-600">
        <Navbar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;