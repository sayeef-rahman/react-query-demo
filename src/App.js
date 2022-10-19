import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import RQsuperHeroPage from "./components/RQsuperHeroPage";
import SuperHeroPage from "./components/SuperHeroPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/superheroes" element={<SuperHeroPage />} />
        <Route path="/query-superheroes" element={<RQsuperHeroPage />} />
      </Routes>
    </div>
  );
}

export default App;
