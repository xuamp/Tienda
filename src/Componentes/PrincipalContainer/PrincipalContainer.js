import { useEffect, useState } from "react";
import Productos from "../Productos";
import ListContainer from "../ListContainer/ListContainer"


function PrincipalContainer() {
  const [listado, setListado] = useState([]);

  useEffect(() => {
    setListado(Productos);
  }, []);

  return <div className="PrincipalContainer">
    <ListContainer lista={listado} />
  </div>;
}

export default PrincipalContainer;
