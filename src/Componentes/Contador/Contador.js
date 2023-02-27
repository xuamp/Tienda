import "../Contador/Contador.css";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

function Contador() {
  return (
    <div className="Contador">
      <div className="sumador">
        <CgMathPlus />
        <p>5</p>
        <CgMathMinus />
      </div>
      <div>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default Contador;
