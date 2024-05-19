import React, { useContext } from 'react'
import AlertContext from '../Context/AlertContext';
const Alert = () => {
  const alertContext = useContext(AlertContext)
  const {alert} = alertContext;

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    <div style={{height: "50px"}}>
      {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show text-black	`} role='alert'>
            <strong>{capitalize(alert.type)}</strong>:{alert.msg}
        </div>}
    </div>
  )
}

export default Alert
