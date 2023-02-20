import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// state
// isLoggedIn: bool
// isSpinnerOn: bool

class Auth extends Component {
    state = {
        isLoggedIn: false,
        isSpinnerOn: false,
    };

    onLogin = () => {
        this.setState({
            isSpinnerOn: true,
        });

        setTimeout(() => {
            this.setState({
                isLoggedIn: true,
                isSpinnerOn: false,
            });
        }, 2000);
    };

    onLogout = () => {
        this.setState({
            isLoggedIn: false,
        });
    };

    render() {
        return (
            <>
                {this.state.isLoggedIn ? (
                    <Logout onLogout={this.onLogout} />
                ) : this.state.isSpinnerOn ? (
                    <Spinner size={50} />
                ) : (
                    <Login onLogin={this.onLogin} />
                )}
            </>
        );
    }
}

export default Auth;
