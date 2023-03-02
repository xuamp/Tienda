import { useEffect, useState } from "react";
import Productos from "../Productos";
import ListContainer from "../ListContainer/ListContainer";
import { useParams } from "react-router-dom";

function PrincipalContainer() {
  const [listado, setListado] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const Filtrado = Productos.filter(
      (item) => item.categoria === categoryName
    );
    categoryName ? setListado(Filtrado) : setListado(Productos);
  }, [categoryName]);

  return (
    <div className="PrincipalContainer">
      <ListContainer lista={listado} />
    </div>
  );
}

export default PrincipalContainer;
