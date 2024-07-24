
import styls from "./App.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Display from "../../Calculator-App/src/components2/Display"
import ButtonsContainer from "../../Calculator-App/src/components2/ButtonsContainer";
import { useState } from "react";
function App() {
  let [CalVal, setCalVal] = useState("");
  let onButtonClick = (buttonText) =>{
      if (buttonText === 'c') {
  setCalVal("");
      } else if (buttonText === '=') {
  const result=eval(CalVal)
  setCalVal(result);
      } else {
        const NewDisplayValue = CalVal + buttonText;
        setCalVal(NewDisplayValue);
      }
    }

  return (

    <div className={styls.calculator}>
      <Display DisplayValue={CalVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
