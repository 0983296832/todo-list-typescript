import { createContext, useReducer, ReactNode } from "react";
import {Todo} from '../model/models'
import {reducer} from '../reducer/reducer';



const LOCAL_STORAGE_KEY = "TODOS";

const todos: Todo[] = [];

type TodoContextType = {
  state: Todo[],
  addTodo:(todo: string)  => void ;
  removeTodo:(id: number) => void ;
  updateTodo:(id: number, content: string) => void ;
  doneTodo:(id: number) => void ;

}



export const TodoContext = createContext<TodoContextType>(
  {state:[],addTodo:() =>{},removeTodo:() => {},updateTodo:() => {},doneTodo:() =>{}});



const TodoProvider = ({children}:{children:ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, todos,() => {
    const localStorageItem = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localStorageItem ? JSON.parse(localStorageItem) : todos;
  } );
  const addTodo = (todo:string)=>{
    dispatch(
      { type: "ADD_TODO",
        payload: todo}
        )}

  const removeTodo = (id:number)=>{
    dispatch(
      { type: "REMOVE_TODO",
        payload: id}
        )}

  const updateTodo = (id:number, content:string)=>{
    dispatch(
      { type: "UPDATE_TODO",
        payload: {
          id,content
        }}
        )}

  const doneTodo = (id:number)=>{
    dispatch(
      { type: "DONE_TODO",
        payload: id}
        )}

       
        return <TodoContext.Provider value={{
          state,
          addTodo,
          removeTodo,
          updateTodo,
          doneTodo
        }}>{children}</TodoContext.Provider>
  
};

export default TodoProvider;
