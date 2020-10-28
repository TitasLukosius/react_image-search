import { ADD_KEYWORD, REMOVE_KEYWORD } from './actionTypes.js';

let nextTodoId = 0;

export const addKeyword = text => ({
    type: ADD_KEYWORD,
    id: nextTodoId++,
    text
});

export const removeKeyword = id => ({
    type: REMOVE_KEYWORD,
    id: id
});