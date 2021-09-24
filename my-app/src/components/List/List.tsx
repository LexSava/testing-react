interface IList {
  items: Array<string>;
  }

const List: React.FC<IList> = (props) => {
    const {items = [] }:any = props;

    if (!items.length) return null;
    
    return (
        <ul className="list">
            {
            items.map((el: any) => ( 
              <li key={el}> {el} </li>
            ))
            }
        </ul>
    )
}

export default List
