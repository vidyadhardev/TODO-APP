import {useState} from "react";
import { BiPlusMedical } from "react-icons/bi";

const AddTodo = ({onNewItem}) => {

  const [todoName,settodoName]=useState("")
  const [dueDate,setDueDate]=useState("");


  const handleNameChange=(event)=>{
    settodoName(event.target.value);
  }

  const handleDateChange=(event)=>{
  setDueDate(event.target.value);
  }
const handleAddButton=()=>{
  onNewItem(todoName,dueDate)
  setDueDate("");
  settodoName("")
}

  return (
    <div className="row vs-row item-conteiner">
        <div className="col-6">
          <input type="text" className="form-control" placeholder="Enter Title" onChange={handleNameChange} value={todoName} required/>
        </div>
        <div className="col-4">
          <input type="date"  className="form-control" onChange={handleDateChange} value={dueDate} required />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-outline-primary vs-button" onClick={handleAddButton}><BiPlusMedical /></button>
        </div>
      </div>
  )
};
export default AddTodo;