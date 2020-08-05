import { v4 as uuid } from 'uuid';

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const REMOVE_ALL_TODO = 'REMOVE_ALL_TODO'

export function addTodoAction(todoText) {
    return {
        type: ADD_TODO,
        todoText: todoText,
        todoId: uuid()
    }
}

export function removeTodoAction(todoId) {
    return {
        type: REMOVE_TODO,
        todoId: todoId
    }
}

export function removeAllTodo() {
    return {
        type: REMOVE_ALL_TODO
    }
}