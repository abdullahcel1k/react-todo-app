import React, { useEffect, useState } from 'react'
import { useParams, useRouteMatch } from "react-router-dom";
import axios from "axios";
import { TodoItem } from '../../core/models/TodoItem';
import TaskDetailCard from '../../components/molecules/TaskDetailCard/TaskDetailCard';

const TodoDetail = (todoItem: TodoItem) => {
    const [todoDetail, setTodoDetail] = useState(todoItem);
    const [isLoading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3001/todos/' + id).then((res) => {
            setTodoDetail(res.data);
        }).catch(err => {
            console.log(`Hata oluştu: ${err}`)
        }).finally(() => {
            setLoading(false);
        });
    }, [])

    return (
        <div>
            {isLoading ? (<p> loading ..</p>) : (
               <TaskDetailCard header={'Task Detail'} item={todoDetail}/>
            )}
        </div>
    )
}

export default TodoDetail;
