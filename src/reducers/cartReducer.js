import { items } from '../mock';
import {DECREMENT_QTY, DELETE_ITEM, INCREMENT_QTY, VALIDATE_PROMO} from "../actions/types";

const initialState = {
    items: items,
    promo: false
};

export default function(state = initialState, action) {
    const {type, payload: newItem } = action;

    switch (type) {
        case INCREMENT_QTY:
            return {
                ...state,
                items: state.items.map(item => {
                    if(item !== newItem) {
                        return item;
                    }
                    return {
                        ...item,
                        qty: item.qty + 1
                    }
                })
            };
        case DECREMENT_QTY:
            return {
                ...state,
                items: state.items.map(item => {
                    if(item !== newItem) {
                        return item;
                    }
                    return {
                        ...item,
                        qty: item.qty - 1
                    }
                })
            };
        case VALIDATE_PROMO:
            return {
                ...state,
                promo: action.payload
            };

        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item !== action.payload)
            };
        default:
            return state
    }
}