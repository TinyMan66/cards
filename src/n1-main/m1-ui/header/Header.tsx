import React from 'react';
import {Link} from "react-router-dom";
import {login, newPassword, page404, profile, recoverPassword, registration, testPage} from "../routes/pathRoutesList";

const styles = {marginRight: 10}

export const Header = () => {
    return (
        <div>
            <Link style={styles} to={testPage}>Test</Link>
            <Link style={styles} to={login}>Login</Link>
            <Link style={styles} to={registration}>Registration</Link>
            <Link style={styles} to={profile}>Profile</Link>
            <Link style={styles} to={page404}>Page404</Link>
            <Link style={styles} to={newPassword}>NewPassword</Link>
            <Link style={styles} to={recoverPassword}>RecoverPassword</Link>
        </div>
    );
};
