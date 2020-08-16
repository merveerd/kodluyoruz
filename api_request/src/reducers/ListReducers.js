import {
    LIST_START,
    LIST_SUCCESS,
    LIST_FAILED,

    ADD_ITEM_START,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILED,

} from '../actions/types';

const INITIAL_STATE = {
    loadingCharacter: false,
    characters: []
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LIST_START:
            return {
                ...state,
                loadingCharacter: true,
            };


        case LIST_SUCCESS:
            return {
                ...state,
                loadingCharacter: false,
                    characters: action.payload.characters
            };

        case LIST_FAILED:
            return {
                ...state,
                loadingCharacter: false,
            };

        case ADD_ITEM_START:
            return {
                ...state,
                loadingAddItem: true,
            };
        case ADD_ITEM_SUCCESS:
            console.log('add_item_success', action.payload)
            const newItem = action.payload.newCharacter

            return {
                ...state,
                loadingAddItem: false,
                    characters: [...state.characters, newItem]
            };
        case ADD_ITEM_FAILED:
            return {
                ...state,
                loadingAddItem: false,
            };
        default:
            return state;
    }
};