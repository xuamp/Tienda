import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarB from "./Componentes/NavBar/NavBarB";
import PrincipalContainer from "./Componentes/PrincipalContainer/PrincipalContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailContainer from "./Componentes/DetailContainer/DetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarB />
        <Routes>
          <Route path="/" element={<PrincipalContainer />} />
          <Route path="/detalle/:id" element={<DetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
