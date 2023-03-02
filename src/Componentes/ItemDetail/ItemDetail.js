import Contador from "../Contador/Contador";
import "../ItemDetail/ItemDetail.css"
import { useParams } from "react-router-dom";

function ItemDetail(props) {
  return (
    <div className="ItemDetail">
      <div className="detalle-imagen">
        <img src="" alt="fotito" />
      </div>
      <div className="detalle-descrip">
        <p>Titulo</p>
        <p>Lorem</p>
        <p>Precio</p>
        <Contador />
      </div>
    </div>
  );
}

export default ItemDetail;
