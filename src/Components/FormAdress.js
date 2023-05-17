import { useState, useEffect } from 'react';

export default function FormAdress(props) {


    const [Placeholder, setPlaceholder] = useState("posts");
  
    const handleChange = (event) => {
      setPlaceholder(event.target.value)
      console.log(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(Placeholder)
    }
    useEffect(() => {
      console.log(Placeholder)
    }, [Placeholder])

    
  
    return (
      <form>
        <select value={Placeholder} onChange={handleChange}>
          <option value="posts">Posts</option>
          <option value="comments">Comments</option>
          <option value="albums">Albums</option>
          <option value="photos">Photos</option>
          <option value="todos">Todos</option>
          <option value="users">Users</option>
        </select>
      </form>
    )
  }