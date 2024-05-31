
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css"
import { useState } from "react";
import Massage from "./components/Massage";

function App() {


  // let date = new Date();
  // let d = date.toUTCString();
  const InitialTodoItemList = [
    {
      name: "Buy Milk",
      dueDate: "20/02/2024"
    },
    {
      name: "Buy Books",
      dueDate: "25/05/2024"
    },
    {
      name: "Buy Laptop",
      dueDate: "05/05/2020"
    }
  ]

  // const InitialTodoItemList=[]
  
  const [todoItems, setTodoItems] = useState(InitialTodoItemList);
  const handleNewItem = (itemName, ItemDueDate) => {
    console.log(`New Item Added : ${itemName} Date : ${ItemDueDate}`);
    const newtodoItems = [
      ...todoItems,
      { name: itemName, dueDate: ItemDueDate }
    ];
    setTodoItems(newtodoItems);
  }

const handleDeleteClick=(todoItemName)=>{
  const NewTodoItems=todoItems.filter(item=>item.name !== todoItemName);
  setTodoItems(NewTodoItems);
  console.log(`Item Deleted ${todoItemName}`);

}

  return (
    <center className="container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
    {todoItems.length===0 && <Massage/>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteClick}></TodoItems>
    </center>
  );
}

export default App;
