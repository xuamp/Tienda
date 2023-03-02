import ItemDetail from "../ItemDetail/ItemDetail";
import Productos from "../Productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailContainer() {
  const [listado2, setListado2] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const Filtrado = Productos.filter((item) => item.id === id);
    id ? setListado2(Filtrado) : setListado2([]);
  }, [id]);

  return (
    <div className="DetailContainer">
      <ItemDetail objeto={listado2} />
    </div>
  );
}

export default DetailContainer;
