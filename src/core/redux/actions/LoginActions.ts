
export const actionTypes = {
    LOGIN: 'LOGIN'
};

export const setLogin = (data) => ({
    type: actionTypes.LOGIN,
    payload: data
});