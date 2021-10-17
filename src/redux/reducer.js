import { initialState } from './initial-state'
import { ADD_TODO, TOGGLE_TODO, DEL_TODO, TOGGLE_IMP } from './actions'
import shortid from 'shortid';

function saveStateToBrowser(state){
    window.localStorage.setItem("om", JSON.stringify(state));
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:{
            const { title } = action.payload;
            const newState = {
                ...state,
                todos: [...state.todos,
                {
                    id: shortid(),
                    title,
                    completed: false,
                    important: false,
                },
                ]
            }
            saveStateToBrowser(newState)
            return newState;
        }
        case TOGGLE_TODO:{
            const newTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed
                }
                return todo
            })

            const newState = {
                ...state,
                todos: newTodos,
            }
            saveStateToBrowser(newState)
            return newState
        }
        case DEL_TODO:{
            const { id} =action.payload
            const newTodos = state.todos.filter((todo) => todo.id !== id);
            const newState = {
                ...state,
                todos:newTodos
            }
            saveStateToBrowser(newState)
            return newState;
        }
        case TOGGLE_IMP: {
            const newTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.important = !todo.important
                }
                return todo
            })
            const newState = {
                ...state,
                todos: newTodos,
            }
            saveStateToBrowser(newState)
            return newState
        }
        default:
            return state;
    }
}


export default reducer;