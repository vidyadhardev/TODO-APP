// import React from 'react'
let Todo = () => {
  const itemList = [
    "Apple",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Mango",
    "Kiwi"
  ];

  return (
    <>
      <center className="fw-bolder fs-5">Healthy Food</center>
      <ul className="list-group w-50">
        {itemList.map((item) => (
          <li key={item} className="list-group-item">
            {item}

          </li>
        ))}
      </ul>
    </>


  );
};
export default Todo;
