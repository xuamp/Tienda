import "../ListContainer/ListContainer.css";
import Item from "../Item/Item";

function ListContainer(props) {
  const { lista } = props;
  return (
    <div className="ListContainer">
      {lista.map((item) => (
        <Item titulo={item.nombre} imagen={item.url}/>
      ))}
    </div>
  );
}

export default ListContainer;
