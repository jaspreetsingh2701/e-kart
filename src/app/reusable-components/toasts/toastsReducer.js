import ToastsActionTypes from "./ToastsActionTypes";

export default function toasts(state = [], action) {
    const { payload, type } = action;
  
    switch (type) {
      case ToastsActionTypes.ADD_TOAST:
        return [payload, ...state];
  
      case ToastsActionTypes.REMOVE_TOAST:
        return state.filter(toast => toast.id !== payload);
  
      default:
        return state;
    }
  }