import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";

// components
import Layout from '../../components/molecules/Layout/Layout';

// containers
import Home from '../../containers/HomeContainer';
import Todos from '../../containers/TodoContainer';
import TodoDetail from '../../containers/TodoDetailContainer';
import Login from '../../containers/Login';
import Logout from '../../containers/Logout';

const Routes = (props) => {
    const isAuthorized = props.auth.auth.username != '';
    return (
        <>
            <Layout>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/logout' component={Logout} />
                    <PrivateRoute path='/todo' isAuthorized={isAuthorized}>
                        <Todos />
                    </PrivateRoute>
                    <PrivateRoute path='/todo-detail/:id' isAuthorized={isAuthorized} >
                        <TodoDetail id={0} title='' priority='' description='' status='' />
                    </PrivateRoute>
                    <Redirect from='**' to='/home' />
                </Switch>
            </Layout>
        </>
    )
};

const PrivateRoute = ({ children, ...rest}) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
        rest.isAuthorized ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
const mapStateToProps = (state) => ({
    auth: state.loginReducer
});

export default connect(mapStateToProps)(Routes);