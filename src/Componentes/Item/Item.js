import { Link } from "react-router-dom";
import "../Item/Item.css";

function Item(props) {
  const { imagen, titulo, id } = props;

  return (
    <div className="Item">
      <div className="item-img">
        <img className="imagen" src={imagen} alt="producto" />
      </div>
      <div className="item-nombre">
        <h5>{titulo}</h5>
        <Link to={`/detalle/${id}`}>
          <button className="boton-item">Detalles</button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
