import Contador from "../Contador/Contador";
import "../ItemDetail/ItemDetail.css"


function ItemDetail(props) {

const { objeto } = props

  return (
    <div className="ItemDetail">
      <div className="detalle-imagen">
        <img src={objeto.url} alt="fotito" />
      </div>
      <div className="detalle-descrip">
        <p>{objeto.nombre}</p>
        <p>{objeto.precio}</p>
        <p>{objeto.descrip}</p>
        <Contador />
      </div>
    </div>
  );
}

export default ItemDetail;
