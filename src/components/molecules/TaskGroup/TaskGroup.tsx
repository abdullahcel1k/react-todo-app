import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { TaskGroupWrapper, TaskGroupHeader, TaskGroupList, Li, Button } from '../../atoms';
import { TodoItem } from '../../../core/models/TodoItem';
import { PriorityEnums } from '../../../core/enums/PriorityEnums';
import Swal from 'sweetalert2';
import { DeleteTodoById, UpdateTodo } from '../../../core/crud/todo.crud';
import TodoModal from '../Modal/TodoModal';
import TodoFormValidationSchemas from '../../../core/validationSchemas/TodoFormValidationSchemas';

type Props = {
    header: string,
    list: TodoItem[],
    fetchData: Function
};

const listClasEnums = {
    LOW: 'list-group-item-secondary',
    NORMAL: 'list-group-item-warning',
    HIGH: 'list-group-item-danger'
};

const selectLiClass = (priority) => {
    switch (priority) {
        case PriorityEnums.LOW:
            return listClasEnums.LOW;

        case PriorityEnums.NORMAL:
            return listClasEnums.NORMAL;

        case PriorityEnums.HIGH:
            return listClasEnums.HIGH;

        default:
            return listClasEnums.LOW;
    }
};

const deleteTask = (id, fetchData) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            DeleteTodoById(id).then(res => {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }).catch(err => {
                Swal.fire(
                    'Oops...',
                    'Something went wrong!',
                    'error'
                )
            }).finally(() => {
                fetchData();
            });
        }
    });
};

const TaskGroup = (props: Props) => {
    const [formModal, setFormModal] = useState({});
    return (
        <TaskGroupWrapper>
            <TodoModal id='updatetodomodal' title='Update your task' formInitialModel={formModal}
                formValidationSchemas={TodoFormValidationSchemas} request={UpdateTodo} fetchData={props.fetchData} />
            <TaskGroupHeader>{props.header}</TaskGroupHeader>
            <TaskGroupList className='list-group list-group-flush'>
                {props.list.map((item, index) => (
                    <Li key={index} className={`list-group-item ${selectLiClass(item.priority)}`}>
                        {item.title}
                        <Button className='btn btn-sm btn-danger float-right ml-1' title='delete task' onClick={() => { deleteTask(item.id, props.fetchData) }}>
                            <i className='fa fa-remove'></i>
                        </Button>
                        <Link type='button' title='show detail' className='btn btn-sm btn-info float-right ml-1' to={`/todo-detail/${item.id}`}>
                            <i className='fa fa-info'></i>
                        </Link>
                        <Button type="button" className={`btn btn-sm btn-warning float-right`} title='edit task' data-toggle="modal" data-target={`#updatetodomodal`} onClick={() => {}}>
                            <i className='fa fa-edit'></i>
                        </Button>
                    </Li>
                ))}
            </TaskGroupList>
        </TaskGroupWrapper>
    )
}

TaskGroup.defaultProps = {
    header: '',
    list: []
};

export default TaskGroup;
