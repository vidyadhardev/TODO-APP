

const TodoItem = ({todoDate,todoName,onDeleteClick}) => {
 
  return (
    <>
      <div className="row vs-row">
        <div className="col-6">
       {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-outline-danger vs-button" onClick={()=>onDeleteClick(todoName)}>Delete</button>
        </div>
      </div>
     </>
  )
};
export default TodoItem;