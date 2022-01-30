import React, { useState } from 'react';
import './App.css';
import InputField from './components/Input/InputField';
import TodoList from './components/TodoList/TodoList';
import {Todo} from './model/models';


const App: React.FC =()=> {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Array<Todo>>([])
  
  const handleAddTodo = (e:React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

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
