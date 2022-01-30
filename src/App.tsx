import React, { useEffect, useState, useRef} from 'react';
import isDeepEqual from 'fast-deep-equal/react'
import './App.css';

import InputField from './components/Input/InputField';
import TodoList from './components/TodoList/TodoList';

import {Todo} from './model/models';


const LOCAL_STORAGE_KEY = "TODOS";

const App: React.FC =()=> {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Array<Todo>>([])
  const todoRef = useRef(todos)

  if (!isDeepEqual(todoRef.current, todos)) {
    todoRef.current = todos
    console.log(todoRef.current);
  }

  const handleAddTodo = (e:React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  useEffect(() => {
    const localStorageItem = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(localStorageItem) {
      const storageTodos =JSON.parse(localStorageItem);
      setTodos(storageTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todoRef.current])

  

  return (
    <div className="App">
     <h1 className="App__title">Taskyfi</h1>
     <InputField 
     todo={todo} 
     setTodo={setTodo} 
     handleAddTodo={handleAddTodo}
     />
     <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
