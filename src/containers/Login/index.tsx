import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import { Div, H1, Paragraph, Hr, Button, LoginWrapper, Small, Input, Label } from '../../components/atoms';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LoginFormValidationSchemas from '../../core/validationSchemas/LoginFormValidationSchemas';
import { setLogin } from '../../core/redux/actions/LoginActions';

const Login = (props) => {
    const history = useHistory();
    const isAuthorized = props.auth.auth.username != '';

    const login = (values) => {
        props.setLogin(values);
        history.push('/todo');
    };

    useEffect(() => {
        if(isAuthorized){
            history.push('/home');
        }
    }, []);

    return (
        <LoginWrapper className="row m-auto p-0 overflow-x">
            <Div className="container text-center jumbotron align-self-center">
                <H1 className="display-4">Login</H1>
                <Paragraph className="lead">You should enter with the valid fields.</Paragraph>
                <Small>Example: username: test, password: test</Small>
                <Hr className="my-4" />
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={(values, { resetForm }) => {
                        login(values);
                        resetForm();
                    }}
                    validationSchema={Yup.object().shape(
                        LoginFormValidationSchemas
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
                                <Div className="form-group col-md-6 offset-md-3 col-sm-12">
                                    <Label htmlFor="validationServer01">Username</Label>
                                    <Input id="username" type="text" className={`form-control ${touched['username'] && (errors['username'] ? `is-invalid` : `is-valid`)}`}
                                        placeholder="Username" value={values['username']} onBlur={handleBlur} onChange={handleChange} autoComplete="off" />
                                    <Div className={`${touched['username'] && (errors['username'] ? `invalid-feedback` : `valid-feedback`)}`}>
                                        {touched['username'] && (errors['username'] ? errors['username'] : '')}
                                    </Div>
                                </Div>

                                <Div className="form-group col-md-6 offset-md-3 col-sm-12">
                                    <Label htmlFor="validationServer01">Password</Label>
                                    <Input id="password" type="password" className={`form-control ${touched['password'] && (errors['password'] ? `is-invalid` : `is-valid`)}`}
                                        placeholder="Password" value={values['password']} onBlur={handleBlur} onChange={handleChange} />
                                    <Div className={`${touched['password'] && (errors['password'] ? `invalid-feedback` : `valid-feedback`)}`}>
                                        {touched['password'] && (errors['password'] ? errors['password'] : '')}
                                    </Div>
                                </Div>

                                <Button type="button" className="btn btn-success" disabled={isSubmitting} onClick={(e) => {
                                    handleSubmit();
                                }}>Login</Button>
                            </>
                        )}</Formik>
            </Div>
        </LoginWrapper>
    )
}

const mapDispatchToProps = { setLogin };

const mapStateToProps = (state) => ({
    auth: state.loginReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
