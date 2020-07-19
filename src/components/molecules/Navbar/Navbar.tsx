import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Button, Span, Div, Form, Ul, Li } from '../../atoms';

const Navbar = (props) => {
    const isAuthorized = props.auth.auth.username != '';

    return (
        <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <Span className="navbar-toggler-icon"></Span>
            </Button>
            <Link className="navbar-brand" to="/">React Todo App</Link>
            <Div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <Ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <Li className="nav-item active">
                        <Link className="nav-link" to="/home">Home <Span className="sr-only">(current)</Span></Link>
                    </Li>
                    {isAuthorized && <Li className="nav-item">
                        <Link className="nav-link" to="/todo">Todos</Link>
                    </Li>}
                </Ul>
                {!isAuthorized ? (
                    <Form className="form-inline my-2 my-lg-0">
                        <Link className="btn btn-outline-success my-2 my-sm-0" to="/login">Login </Link>
                    </Form>
                ) : (<Form className="form-inline my-2 my-lg-0">
                    <Link className="btn btn-outline-danger my-2 my-sm-0" to="/logout">Logout </Link>
                </Form>)}
            </Div>
        </Nav>
    )
}

const mapStateToProps = (state) => ({
    auth: state.loginReducer
});

export default connect(mapStateToProps)(Navbar);