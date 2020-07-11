import {
    SET_EDIT_PO
  } from '../constants/poconstants';

  const a = "Select Product"
  const b ="Select Manufacturer"
  export const initialState = {
      destination:'',
      receiver: {name:"Select Receiver"},
      products : [{ [`${a}-${b}`]: "" }]
}
  
  export const editPoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EDIT_PO:
        return action.payload.data;
      
      default:
        return state;
    }
  };
  