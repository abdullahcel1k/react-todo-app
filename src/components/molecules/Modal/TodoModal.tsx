import React from 'react'
import { Div, Button, Span, Label, Input, Select, Option, TextArea } from '../../atoms';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { PriorityEnums } from '../../../core/enums/PriorityEnums';
import { StatusEnums } from '../../../core/enums/StatusEnums';
import Swal from 'sweetalert2';

type Props = {
    id: string,
    title: string,
    formInitialModel: {},
    formValidationSchemas: {},
    request: Function,
    fetchData: Function
};


const TodoModal = (props: Props) => {

    const _handleSubmit = (values, resetForm) => {
        props.request(values).then(() => {
            Swal.fire(
                'Created!',
                'Your task has been created.',
                'success'
            );            
        }).catch(err => {
            Swal.fire(
                'Oops...',
                'Something went wrong!',
                'error'
            );
        }).finally(() => {
            resetForm();
            props.fetchData();
            _closeModalAnotherWay();
        });
    };

    const _closeModalAnotherWay = () =>{
        // trigger close button after request
        document.getElementById('close-modal')?.click();
    };

    return (
        <>
            {/* <button type="button" className={`${props.btnType} float-right`} data-toggle="modal" data-target={`#${props.id}`}>
                {props.btnChildren}
            </button> */}

            <Div className="modal fade" id={props.id} role="dialog" aria-labelledby={props.id} aria-hidden="true">
                <Div className="modal-dialog" role="document">
                    <Div className="modal-content">
                        <Div className="modal-header">
                            <h5 className="modal-title" id={`${props.id}Label`}>{props.title}</h5>
                            <Button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <Span aria-hidden="true">&times;</Span>
                            </Button>
                        </Div>
                        <Formik
                            initialValues={props.formInitialModel}
                            onSubmit={(values, { resetForm }) => {
                                _handleSubmit(values, resetForm);
                            }}
                            validationSchema={Yup.object().shape(
                                props.formValidationSchemas
                            )}
                        >
                            {({
                                values,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                errors,
                                touched
                            }) => (
                                    <>
                                        <Div className="modal-body">
                                            <Div className="form-group">
                                                <Label htmlFor="validationServer01">Task Title</Label>
                                                <Input id="title" type="text" className={`form-control ${touched['title'] && (errors['title'] ? `is-invalid` : `is-valid`)}`}
                                                    placeholder="Task Title" value={values['title']} onBlur={handleBlur} onChange={handleChange} />
                                                <Div className={`${touched['title'] && (errors['title'] ? `invalid-feedback` : `valid-feedback`)}`}>
                                                    {touched['title'] && (errors['title'] ? errors['title'] : '')}
                                                </Div>
                                            </Div>

                                            <Div className="form-group">
                                                <Label htmlFor="validationServer01">Task Description</Label>
                                                <TextArea id="description" className={`form-control ${touched['description'] && (errors['description'] ? `is-invalid` : `is-valid`)}`}
                                                    placeholder="Task Description" value={values['description']} onBlur={handleBlur} onChange={handleChange} />
                                                <Div className={`${touched['description'] && (errors['description'] ? `invalid-feedback` : `valid-feedback`)}`}>
                                                    {touched['description'] && (errors['description'] ? errors['description'] : '')}
                                                </Div>
                                            </Div>


                                            <Div className="form-group">
                                                <Label htmlFor="validationServer01">Task Priority Level</Label>
                                                <Select id="priority" className={`custom-select ${touched['priority'] && (errors['priority'] ? `is-invalid` : `is-valid`)}`}
                                                    value={values['priority']} onBlur={handleBlur} onChange={handleChange}>
                                                    <Option value={""}>Select your task priority level</Option>
                                                    <Option value={PriorityEnums.LOW}>{PriorityEnums.LOW}</Option>
                                                    <Option value={PriorityEnums.NORMAL}>{PriorityEnums.NORMAL}</Option>
                                                    <Option value={PriorityEnums.HIGH}>{PriorityEnums.HIGH}</Option>
                                                </Select>
                                                <Div className={`${touched['priority'] && (errors['priority'] ? `invalid-feedback` : `valid-feedback`)}`}>
                                                    {touched['priority'] && (errors['priority'] ? errors['priority'] : '')}
                                                </Div>
                                            </Div>

                                            <Div className="form-group">
                                                <Label htmlFor="validationServer01">Task Status</Label>
                                                <Select id="status" className={`custom-select ${touched['status'] && (errors['status'] ? `is-invalid` : `is-valid`)}`}
                                                    value={values['status']} onBlur={handleBlur} onChange={handleChange}>
                                                    <Option value={""}>Select your task status</Option>
                                                    <Option value={StatusEnums.ANALYSIS}>{StatusEnums.ANALYSIS}</Option>
                                                    <Option value={StatusEnums.DEV}>{StatusEnums.DEV}</Option>
                                                    <Option value={StatusEnums.TEST}>{StatusEnums.TEST}</Option>
                                                    <Option value={StatusEnums.DONE}>{StatusEnums.DONE}</Option>
                                                </Select>
                                                <Div className={`${touched['status'] && (errors['status'] ? `invalid-feedback` : `valid-feedback`)}`}>
                                                    {touched['status'] && (errors['status'] ? errors['status'] : '')}
                                                </Div>
                                            </Div>

                                        </Div>
                                        <Div className="modal-footer">
                                            <Button id='close-modal' type="button" className="btn btn-secondary" data-dismiss="modal">Close</Button>
                                            <Button type="button" className="btn btn-primary" disabled={isSubmitting} onClick={(e) => {
                                                handleSubmit();
                                            }}>Save changes</Button>
                                        </Div>
                                    </>
                                )}</Formik>
                    </Div>
                </Div>
            </Div>
        </>
    )
};

export default TodoModal;
