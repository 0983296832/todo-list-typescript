import React from 'react';
import {Todo} from '../../model/models';
import SingleTodo from '../SingleTodo/SingleTodo';
import "./TodoList.css"

interface props{
    todos:Array<Todo>
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<props>= ({todos, setTodos}) => {
  return <div className="todo-list">
      {todos?.map((todo) => <SingleTodo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>)}
  </div>;
};

export default TodoList;
