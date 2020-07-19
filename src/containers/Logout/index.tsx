import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setLogin } from '../../core/redux/actions/LoginActions';

const Logout = (props) => {
    const history = useHistory();
    const isAuthorized = props.auth.auth.username != '';

    const initialAuth = { username: '', password: '' }
    useEffect(() => {
        if (isAuthorized) {
            props.setLogin(initialAuth);
            history.push('/home');
        }
    }, []);

    return (
        <div>
            .. loading
        </div>
    )
};

const mapDispatchToProps = { setLogin };

const mapStateToProps = (state) => ({
    auth: state.loginReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
