import { ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODO} from "./actions";

const initialState = { todoList: [] };

export default function todosReducer( state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return  {
                todoList: [
                    ...state.todoList,
                    {
                        todoId: action.todoId,
                        todoText: action.todoText
                    }
                ]
            }
        case REMOVE_TODO:

            return { todoList: state.todoList.filter(todo =>
                    todo.todoId !== action.todoId
                )}

        case REMOVE_ALL_TODO:
            return initialState;

        default:
            return state;
    }
}