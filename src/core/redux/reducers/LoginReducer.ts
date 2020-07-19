import { actionTypes } from "../actions/LoginActions";

const initialState = { auth: { username: '', password: '' } };

const loginReducer = (state = initialState , action) => {
    let newState;
    switch (action.type) {
        case actionTypes.LOGIN:
            const { username, password } = action.payload;
            newState = { auth: { username, password }}
            return {
                ...state,
                ...newState,
            }
        default:
            return state;
    }
};

export default loginReducer;
