
import "./App.css";
// import  { useEffect, useState } from 'react';
// import ClockHeading from "./components1/ClockHeading";
// import ClockSlogen from "./components1/ClockSlogen";
// import CurrentTime  from "./components1/CurrentTime";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Container from "./components/Container";+
import ErrorMassage from "./components/ErrorMassage"
import FoodItem from "./components/FoodItem";
// import Todo from "./components/Todo";

function App() {
  // const [currentTime, setCurrentTime] = useState('');

  // useEffect(() => {
  //   fetch('http://worldtimeapi.org/api/timezone/asia/Kolkata')
  //     .then(response => response.json())
  //     .then(data => {
  //       setCurrentTime(data.datetime);
  //     })
  //     .catch(error => console.error('Error fetching time:', error));
  // }, []);
  const foodItems = [
    "Apple", "Banana", "Orange", "Grape", "Strawberry",
    "Pineapple", "Watermelon", "Mango", "Kiwi"
  ];
  return (

    // <div>
    //   {/* <ClockHeading/>
    //  <ClockSlogen/>
    //  <CurrentTime/> */}
    //   <Todo />
    // </div>
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMassage items={foodItems}></ErrorMassage>
      <FoodItem items={foodItems}></FoodItem>
    </>
  );
}

export default App;


//  3:52 minutes reback