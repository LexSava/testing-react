interface IList {
  items: Array<string>;
  }

const List: React.FC<IList> = (props) => {

    if (!props.items.length) return null;
    
    return (
        <ul className="list">
            {
            props.items.map((el: any) => ( 
              <li key={el}> {el} </li>
            ))
            }
        </ul>
    )
}

export default List
