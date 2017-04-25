import React from 'react';

import { Link } from 'react-router-dom';

class Login extends React.Component {

    login() {
        const { history } = this.props;
        console.log('about to login', history);
        history.push("/radar");
    }

    render() {
        return (
            <div className="container">

                <form className="narrow-form">
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>

                    <button onClick={this.login.bind(this)} type="button"
                            className="btn btn-lg btn-primary btn-block" >
                        Sign in
                    </button>

                    <Link className="btn btn-lg btn-block" to="/register">
                        Register
                    </Link>
                </form>
            </div>
        );
    }
}

export default Login;