// import Item from "./Item";

 
 const FoodItem=(items)=>{
  return(
    <>
      <ul className="list-group">
        {items.map((items)=>(
          <li key={items} className="list-group-item">{items}</li>
        ))}
      </ul>
    </>
  )
 };
 export default FoodItem;