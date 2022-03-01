import React, { useState, useContext } from 'react';
import "./SingleTodo.css"
import {MdEdit, MdDelete, MdDone} from 'react-icons/md';
import {Todo} from '../../model/models';
import {TodoContext} from "../../context/context"


const SingleTodo: React.FC<{
    todo: Todo;
  }>= ({todo}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const { removeTodo, updateTodo, doneTodo} = useContext(TodoContext)

  const handleDoneTodo = (id:number)=>{
    doneTodo(id)
  }
  const handleEditTodo = (e:React.FormEvent, id:number)=>{
    e.preventDefault();
    updateTodo(id, editTodo)
    setEdit(!edit)
  }

  const handleDeleteTodo =(id:number)=>{
    removeTodo(id)
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
