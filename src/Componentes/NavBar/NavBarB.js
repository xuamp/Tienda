import { Link } from "react-router-dom";
import "../NavBar/NavBar.css"

function NavBarB() {
  return (
    <div className="navBar">
      <Link to="/categoria/Notebooks">Notebooks</Link>
      <Link to="/">Home</Link>
      <Link to="/categoria/Pc">Pc</Link>
      <Link to="/categoria/impresoras">Impresoras</Link>
    </div>
  );
}

export default NavBarB;
