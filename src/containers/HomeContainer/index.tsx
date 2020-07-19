import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Div, H1, Paragraph, Hr, H4 } from '../../components/atoms';

const Home = (props) => {
    const isAuthorized = props.auth.auth.username != '';
    return (
        <Div className="jumbotron">
            <H1 className="display-4">Hello, world!</H1>
            <Paragraph className="lead">This is a simple kanban task management system .</Paragraph>
            <Hr className="my-4" />
            <H4>What is Kanban ?</H4>
            <Paragraph>Kanban is a visual system for managing work as it moves through a process. Kanban visualizes both the process (the workflow) and the actual work passing through that process. The goal of Kanban is to identify potential bottlenecks in your process and fix them so work can flow through it cost-effectively at an optimal speed or throughput.</Paragraph>
            {!isAuthorized ? (
                <Paragraph className="lead">
                    Try this system 🔜
                    <Link className="btn btn-primary btn-sm ml-3" to="/login" role="button">Login</Link>
                </Paragraph>
            ) : (
                <Paragraph className="lead">
                    See your tasks
                    <Link className="btn btn-primary btn-sm ml-3" to="/todo" role="button">Todos</Link>
                </Paragraph>
                )}
        </Div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.loginReducer
});

export default connect(mapStateToProps)(Home);