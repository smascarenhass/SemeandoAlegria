import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonDonate from './Components/Buttons/ButtonDonate';
import Home from './Pages/Home';
import PgDonates from "./Pages/pgDonates";


function App() {

  return (
    <div>
      <h1>Semeando Vidas</h1>

      <ButtonDonate/>

    </div>
  )
}

export default App
