import styls from "./ButtonsContainer.module.css";
const ButtonsContainer = ({onButtonClick}) => {
  const CalcButtons =
    [
      'c', '1', '2', '+', '3', '4', '-', '5', '6',
      '*', '7', '8', '/', '=', '9', '0', '.'
    ]

  return (
    <div className={styls.buttonsContainer}>
      {CalcButtons.map((buttonName) => {
        return (<button key={buttonName} className={`${styls["button"]} btn btn-outline-warning`} onClick={(()=> onButtonClick(buttonName))}> {buttonName} </button>);
      })}



    </div>

  )
};
export default ButtonsContainer;