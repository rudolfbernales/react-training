import { ADD_CONTACT } from '../actions/action';
import uniqid from 'uniqid';


const initialState = {
    list: []
}

export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case ADD_CONTACT:
        return {
          ...state,
          list: [
            ...state.list,
            {
              ...payload.Contact,
              id: uniqid()
            }
          ]
        };
        default:
            return {
                ...state
            }
    }
}