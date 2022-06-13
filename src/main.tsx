import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './main.css';
import PgDonates from './Pages/pgDonates';
import Home from './Pages/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/  " element={<App />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/PgDonates" element={<PgDonates />} />
  </Routes>
</BrowserRouter>
)
