import React, { useRef } from 'react';
import './input.css';

interface props{
  todo: string;
  setTodo:React.Dispatch<React.SetStateAction<string>>
  handleAddTodo:(e:React.FormEvent)=>void
}
const InputField: React.FC<props> =({todo, setTodo, handleAddTodo}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return <form 
          className="add_form" 
          onSubmit={(e) =>{
            handleAddTodo(e);
            inputRef.current?.blur()
          }}>
            <input 
            value={todo}
            type="text" 
            placeholder="Enter a Task ..." 
            className="add_form__input" 
            onChange={(e)=> setTodo(e.target.value)}
            ref={inputRef}
            ></input>  
            <button className="add_form__btn" type="submit">Go</button>
          </form>
}

export default InputField;
