import {DECREMENT_QTY, DELETE_ITEM, INCREMENT_QTY, VALIDATE_PROMO} from "../actions/types";

export const incrementQty = (item) => {
    return {
        type: INCREMENT_QTY,
        payload: item
    }
};

export const decrementQty = (item) => {
    return {
        type: DECREMENT_QTY,
        payload: item
    }
};

export  const validatePromo = (bool) => {
    return {
        type: VALIDATE_PROMO,
        payload: bool
    }
};

export const deleteItem = (item) => {
    return {
        type: DELETE_ITEM,
        payload: item
    }
};