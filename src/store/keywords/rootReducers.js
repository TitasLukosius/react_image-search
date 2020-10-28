import { ADD_KEYWORD, REMOVE_KEYWORD } from './actionTypes.js';

const keywords = (state = [], action) => {
    switch(action.type) {
        case ADD_KEYWORD:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case REMOVE_KEYWORD:
            return state.filter(keyword => keyword.id !== action.id);   
            default : return state;
    }
}

export default keywords;