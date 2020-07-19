export const actionTypes = {
    SET_TODOS: 'SET_TODOS',
    SET_ACTIVE_TODO: 'SET_ACTIVE_TODO'
};

export const setTodos = (data) => ({
    type: actionTypes.SET_TODOS,
    payload: data
});

export const setActiveTodo = (data) => ({
    type: actionTypes.SET_ACTIVE_TODO,
    payload: data
});
