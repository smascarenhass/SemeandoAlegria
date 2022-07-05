import Home from "./Pages/Home";
import Sobre from "./Pages/About";

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Donate from "./Pages/Donate";
import Header from "./Components/Header e Footer/Header";
import Footer from "./Components/Header e Footer/Footer";
import InfoDonate from "./Pages/InfoDonate";
import Events from "./Pages/Eventos/Events";
import SobreNos from "./Pages/AboutUs";
import Voluntarios from "./Pages/Donate";


 const App = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="Sobre" element={<Sobre />}/>
        <Route path="Donate" element={<Donate />} />
        <Route path="InfoDonate" element={<InfoDonate />} />
        <Route path="Eventos" element={<Events />} />
        <Route path="SobreNos" element={<SobreNos />} />
        <Route path="Voluntarios" element={<Voluntarios />} />
      </Routes>
      <Footer/>
  </BrowserRouter>
  );
};

export default App;