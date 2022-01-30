import React, { useState } from 'react';
import "./SingleTodo.css"
import {MdEdit, MdDelete, MdDone} from 'react-icons/md';
import {Todo} from '../../model/models';


const SingleTodo: React.FC<{
    todo: Todo;
    todos:Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  }>= ({todo, todos, setTodos}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDoneTodo = (id:number)=>{
    setTodos(
        todos.map((todo)=>
        todo.id===id ? {...todo, isDone: !todo.isDone} : todo
        )
    );
  }
  const handleEditTodo = (e:React.FormEvent, id:number)=>{
    e.preventDefault();
    setTodos(
        todos.map((todo)=>
        todo.id===id ? {...todo, todo:editTodo} : todo
        )
    );
    setEdit(!edit)
  }

  const handleDeleteTodo =(id:number)=>{
    setTodos(
        todos.filter((todo)=>
        todo.id!==id 
        )
    );
  }

  return <form className="single-todo" onSubmit={(e) =>handleEditTodo(e,todo.id)}>
      <div className="single-todo__name">
        {todo.isDone ? <del>{todo.todo}</del>
        :edit ? <input value={editTodo} onChange={ (e) =>setEditTodo(e.target.value)} style={{width:"60%"}}/>
        :<p>{todo.todo}</p>}
      </div>
      <div className="single-todo__icon">
          <MdEdit  onClick={(e) => { 
            if (!edit && !todo.isDone) {
                  setEdit(!edit);
                } else if(edit){
                  setEdit(!edit);
                  handleEditTodo(e,todo.id)
                }
            
              }
          }/>
          <MdDelete onClick={() =>handleDeleteTodo(todo.id)}/>
          <MdDone onClick={() =>handleDoneTodo(todo.id)}/>
      </div>
  </form>;
};

export default SingleTodo;
