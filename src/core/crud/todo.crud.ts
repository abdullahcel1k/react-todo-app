import TodoEnpoints from '../enums/Endpoints/TodoEndpoints';
import axios from 'axios';

export const GetTodos = () => {
    return axios.get(TodoEnpoints.Todos);
};

export const AddTodo = (values) => {
    return axios.post(TodoEnpoints.Todos, values);
};

export const UpdateTodo = (values) => {
    return axios.put(`${TodoEnpoints.Todos}/${values.id}`, values);
};

export const GetTodoById = (id) => {
    return axios.get(`${TodoEnpoints.Todos}/${id}`);
}

export const DeleteTodoById = (id) => {
    return axios.delete(`${TodoEnpoints.Todos}/${id}`);
}
