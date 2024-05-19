import AlertContext from "./AlertContext";
import { useState } from "react";

const AlertState = (props)=>{
    const name = "rohanAlert"
    const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
    return(
        <AlertContext.Provider 
        value={{name, alert, showAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}
export default AlertState