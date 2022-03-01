import React from 'react';
import {Todo} from '../../model/models';
import SingleTodo from '../SingleTodo/SingleTodo';
import "./TodoList.css"



interface props{
    todos:Array<Todo>   
}

const TodoList: React.FC<props>= ({todos}) => {
  return <div className="todo-list">
      {todos?.map((todo) => <SingleTodo key={todo.id} todo={todo}  />)}
  </div>;
};

export default TodoList;
