/* Dashboard route for authenticated users. Imported and use in the main route - index.js */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Dashboard from '../views/dashboard'
import AuthServices from '../services/AuthServices'

const DashboardRoutes = ({props, component: Component, ...rest }) => {
    const auth = new AuthServices();
    return (
        <Route {...rest} render={props => auth.isAuthenticate() ? (
            <Dashboard title={props.title}>
                <Component {...props} />
            </Dashboard>
        ): (<Redirect to={{pathname: "/"}} />)} />
    )
}

export default DashboardRoutes