import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Heart from "./pages/Heart";
import Diabetes from "./pages/Diabetes";


function App() {

return (

<BrowserRouter>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/heart" element={<Heart />} />

<Route path="/diabetes" element={<Diabetes />} />

</Routes>

<Footer />

</BrowserRouter>

);

}

export default App;