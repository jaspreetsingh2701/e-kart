import ToastsActionTypes from './ToastsActionTypes';

let id = 0;

const defaultOptions = {
    color: "#34495e"
};

export default function createToast(options) {
    return {
        ...defaultOptions,
        ...options,
        id: id++
    }
}

export function addToast(options = {}) {
    return {
        payload: createToast(options),
        type: ToastsActionTypes.ADD_TOAST
    };
}

export function removeToast(id) {
    return {
        payload: id,
        type: ToastsActionTypes.REMOVE_TOAST
    };
}