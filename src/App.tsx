import Home from "./Pages/Home";

import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'

 const App = () => {
  return(
    <BrowserRouter>
    <Home/>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
  </BrowserRouter>
  );
};

export default App;