import { RiShoppingCartLine } from "react-icons/ri";
import "../ItemCarrito/ItemCarrito.css"

function ItemCarrito(props) {
  return (
    <div className="Item-carrito">
      <div className="div-carrito">
        <RiShoppingCartLine />
        <p className="cantidad-carrito">15</p>
      </div>
    </div>
  );
}

export default ItemCarrito;
