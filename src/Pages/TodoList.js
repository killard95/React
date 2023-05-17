import { NavBar } from "../Home.js";
import { useState } from "react";

let todo = [];
export default function TodoList() {
  return (
    <>
      <p>[11:04] Diane Robert</p>

      <h1>TodoList</h1>
      <NavBar />
      <Input />
    </>
  );
}

export function Input() {
  const [name, setName] = useState("");
  const [inputs, setInputs] = useState({ nom: "" });
  const [value, setValue] = useState({ value: "" });


  const handleChange = (evenement) => {
    const name = evenement.target.name;
    const value = evenement.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setName(value);
  };

  const handleSubmit = (evenement) => {
    evenement.preventDefault();
    console.log("todo : ", inputs.todo);
    todo.push(inputs.todo);
    setValue({value},"todo");
    evenement.target.reset()
    
  };


  const handleDelete = (evenement) => {
    evenement.preventDefault();
    todo.splice(todo.indexOf(inputs.todo), 1);
    setValue({value},todo);
  };




  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Entrez une tache : </label>
        <input
          type="text"
          name="todo"
          value={inputs.name}
          onChange={handleChange}
        />

        <input type="submit" value="Add"/>
      </form>
      <ul className="todo">
        {todo.map((todo) => (
          <>
            <li key={todo.id} className="checked_li" ><input type="checkbox" className="check"></input> {todo} <button onClick={handleDelete}>X</button></li>
          </>
        ))}
      </ul>
    </>
  );
}

