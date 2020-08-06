import React, { useState, useEffect } from 'react';
import AuthServices from '../../services/AuthServices';

function Logout() {

    useEffect(() => {
        const auth = new AuthServices()
        auth.logout()
        auth.checkLogin()

    }, []);

    return (
        <div></div>
    )
}

export default Logout