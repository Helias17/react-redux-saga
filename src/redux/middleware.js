import { CREATE_POST } from "./types";
import {showAlert} from './actions';

const forbiddenWordsList = ['insert', 'eval', 'function'];

export const forbiddenWordsMiddleware = ({dispatch}) => {
  return (next) => {
    return (action) => {
      if (action.type === CREATE_POST) {
        const found = forbiddenWordsList.filter(word => action.payload.title.includes(word) );
        if (found.length) {
          return dispatch(showAlert('Error! You\'ve inputed forbidden word'));
        }
      }
      return next(action);
    }
  }
}