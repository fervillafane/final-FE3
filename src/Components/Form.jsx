import React, { useState, useReducer } from "react";
import { reducer } from "./userListReducer";

const initialState = {
  users: [{
    message: "Quisiera un turno con el doctor pero no lo veo",
    email: "maria@ggmail.com"
  }]
}

const Form = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const [newUser, setNewUser] = useState({
    message: '',
    email: ''
  })
  
  const handleChange = (e) => {
      setNewUser({
          ...newUser,
          [e.target.name]: e.target.value
      })
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch({type: 'ADD_REQUEST', payload: newUser})
      alert ("sus datos fueron cargados correctamente")
  }
return (
  <div>
      <form onSubmit={handleSubmit}>
          <input type="text" name="message" onChange={handleChange}/>
          <input type="email" name="email" onChange={handleChange}/>
          <button>Submit</button>
      </form>
    {state.users.map(user => (
        <li> mensaje: {user.message} - email: {user.email}</li>
    ))}
  </div>
)
}
export default Form;
