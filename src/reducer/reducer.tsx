import {Todo} from '../model/models'


type TodoAction ={
    type: "ADD_TODO" |"REMOVE_TODO"|"UPDATE_TODO"|"DONE_TODO", 
    payload:any
}

export const reducer = (state:Todo[], action:TodoAction) =>{
    switch(action.type){
        case "ADD_TODO":
            return [...state,{todo:action.payload,id:Date.now(), isDone: false}];
        case "REMOVE_TODO":
            return state.filter((todo) =>action.payload !== todo.id);
        case "UPDATE_TODO":
            return state.map((todo) =>
                    action.payload.id === todo.id ? {...todo, todo:action.payload.content} : todo
            )
        case "DONE_TODO":
            return state.map((todo) =>
                    action.payload === todo.id ? {...todo, isDone:!todo.isDone} : todo
            )
        default: 
            return state
    }

}