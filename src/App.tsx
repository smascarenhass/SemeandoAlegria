import Home from "./Pages/Home";
import Sobre from "./Pages/About";

import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Donate from "./Pages/Donate";
import Header from "./Components/Header e Footer/Header";
import Footer from "./Components/Header e Footer/Footer";


 const App = () => {
  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="Sobre" element={<Sobre />} />
        <Route path="Donate" element={<Donate />} />
      </Routes>
    <Footer />
  </BrowserRouter>
  );
};

export default App;