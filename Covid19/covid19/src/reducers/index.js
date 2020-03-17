//REDUCERS
import produce from 'immer';
import {
  GET_ALL_CASE,
  GET_ALL_CASE_SUCCESS,
  GET_ALL_CASE_FAILED,
} from '../constants/index';

export const initialState = {
  users : [],
  loading: false,
  error: false,
  success: false,
  
};

const rootReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALL_CASE:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;

      case GET_ALL_CASE_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        draft.users = action.data;
        break;

      case GET_ALL_CASE_FAILED:
        draft.loading = false;
        draft.error = true;
        draft.success = true;
        break;

      

      default:
        return state;
    }
  });

export default rootReducer;

