import styls from "./Display.module.css";
const Display=({DisplayValue})=>{
  return(
    <input type="text" className={styls.display} value={DisplayValue} readOnly />
  )
};
export default Display