import "../Contador/Contador.css";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(1);
  const stock = 10;

  function sumar() {
    if (contador === stock) {
      return undefined;
    } else {
      setContador(contador + 1);
    }
  }

  function restar() {
    if (contador === 0) {
      return undefined;
    } else {
      setContador(contador - 1);
    }
  }

  return (
    <div className="Contador">
      <div className="sumador">
        <CgMathMinus onClick={restar} className="ico-contador" />
        <p className="numero">{contador}</p>
        <CgMathPlus onClick={sumar} className="ico-contador" />
      </div>
      <div>
        <button className="boton-comprar">Comprar</button>
      </div>
    </div>
  );
}

export default Contador;
