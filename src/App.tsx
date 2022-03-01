import React, { useEffect, useState, useRef, useContext} from 'react';
import isDeepEqual from 'fast-deep-equal/react'
import './App.css';
import {TodoContext} from "./context/context"

import InputField from './components/Input/InputField';
import TodoList from './components/TodoList/TodoList';




const LOCAL_STORAGE_KEY = "TODOS";

const App: React.FC =()=> {
  const [todo, setTodo] = useState<string>("")
  const {state, addTodo} = useContext(TodoContext)
  const todoRef = useRef(state)
  
  if (!isDeepEqual(todoRef.current, state)) {
    todoRef.current = state
  }

  const handleAddTodo = (e:React.FormEvent) => {
    e.preventDefault()
    if(todo){
      addTodo(todo)
    }
    setTodo("")
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state])

  

  return (
    <div className="App">
     <h1 className="App__title">Taskyfi</h1>
     <InputField 
     todo={todo} 
     setTodo={setTodo} 
     handleAddTodo={handleAddTodo}
     />
     <TodoList todos={state} />
    </div>
  );
}

export default App;
