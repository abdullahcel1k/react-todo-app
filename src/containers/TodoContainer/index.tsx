import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StatusEnums } from '../../core/enums/StatusEnums';
import { TodoItem, TodoItemInitial } from '../../core/models/TodoItem';
import { OrangeBoard, Div, Img, H4, Button } from '../../components/atoms';
import TaskGroup from '../../components/molecules/TaskGroup/TaskGroup';
import { setTodos } from '../../core/redux/actions/TodoActions';
import TodoModal from '../../components/molecules/Modal/TodoModal';
import TodoFormValidationSchemas from '../../core/validationSchemas/TodoFormValidationSchemas';
import { GetTodos, AddTodo } from '../../core/crud/todo.crud';

const Todos = (props) => {
    const [isLoading, setLoading] = useState(true);

    const getAllTodos = () => {
        GetTodos().then((res) => {
            props.setTodos(res.data);
        }).catch(err => {
            console.log(`Hata oluştu : ${err}`)
        }).finally(() => {
            setLoading(false);
        });
    };

    React.useEffect(() => {
        getAllTodos();
    }, [])

    return (
        isLoading ? (<p>loading..</p>) : (
            <OrangeBoard className='container mt-5'>
                <Div className='row'>
                    <Div className='col-12'>
                        <Div className='row'>
                            <Div className='col-6'>
                                <Img src={require(`../../assets/images/app-logo.svg`)} width="64" height="64" alt="Application logo." />
                                <H4 className="float-right mt-3 app-header"><i>This application for management your life.</i></H4>
                            </Div>
                            <Div className='col-6 mt-3'>
                                <Button type="button" className={`btn btn-success float-right`} data-toggle="modal" data-target={`#addtodomodal`}>
                                    Add Task
                                </Button>
                                <TodoModal id='addtodomodal' title='Add your task' formInitialModel={TodoItemInitial} 
                                    formValidationSchemas={TodoFormValidationSchemas} request={AddTodo} fetchData={getAllTodos} />
                            </Div>
                        </Div>
                    </Div>
                    <Div className='col-12 mt-3'>
                        <Div className='row mt-3'>
                            <Div className="col-3">
                                <TaskGroup header={`In Analysis`} list={props.todo.list.filter((item: TodoItem) => item.status === StatusEnums.ANALYSIS)} fetchData={getAllTodos}/>
                            </Div>
                            <Div className="col-3">
                                <TaskGroup header={`In Dev`} list={props.todo.list.filter((item: TodoItem) => item.status === StatusEnums.DEV)} fetchData={getAllTodos} />
                            </Div>
                            <Div className="col-3">
                                <TaskGroup header={`In Test`} list={props.todo.list.filter((item: TodoItem) => item.status === StatusEnums.TEST)} fetchData={getAllTodos} />
                            </Div>
                            <Div className="col-3">
                                <TaskGroup header={`Done`} list={props.todo.list.filter((item: TodoItem) => item.status === StatusEnums.DONE)} fetchData={getAllTodos} />
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </OrangeBoard>
        )
    );
}

const mapDispatchToProps = { setTodos };

const mapStateToProps = (state) => ({
    todo: state.todoReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
