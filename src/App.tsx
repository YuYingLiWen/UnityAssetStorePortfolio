import { Routes, Route } from "react-router-dom";

import MainLayout from "./MainLayout";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;