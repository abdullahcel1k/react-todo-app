export interface TodoItem {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
};

export const TodoItemInitial = {
    id: 0,
    title: '',
    description: '',
    status: '',
    priority: ''
};