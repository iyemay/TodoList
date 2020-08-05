import { ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODO} from "./actions";

const initialState = { todos: [] };

export default function todosReducer( state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.todoId,
                    todoText: action.todoText
                }
            ];
        case REMOVE_TODO:
            return state.filter(todo => todo.todoId !== action.todoId);

        case REMOVE_ALL_TODO:
            return state;

        default:
            return state;
    }
}