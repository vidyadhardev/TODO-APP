import TodoItem from "./TodoItem";
const TodoItems=({todoItems,onDeleteClick})=>{
  return(
    <>
      <div className="item-conteiner">
      {todoItems.map((items)=>
        <TodoItem key={items} todoDate={items.dueDate} todoName={items.name} onDeleteClick={onDeleteClick}></TodoItem>
      )}
        
      </div>
    </>
  )
};
export default TodoItems;