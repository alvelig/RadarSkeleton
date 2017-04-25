import React from 'react';

import { Link, withRouter } from 'react-router-dom';

class Register extends React.Component {

    //TODO: is authenticated

    register() {
        const { match, history } = this.props;
        console.log('about to register', history);
        history.push(`${match.path}?tracker`);
    }

    render() {

        const { match } = this.props;

        console.log(match);

        return (
            <div className="container">

                <form className="narrow-form">
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                    <label htmlFor="inputEmail" className="sr-only">Name</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Name" required="" autoFocus="" />
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>

                    <button onClick={this.register.bind(this)} type="button"
                            className="btn btn-lg btn-primary btn-block" >
                        Registrar
                    </button>

                    <Link className="btn btn-lg btn-block" to="/login">
                        Ya tengo cuenta
                    </Link>
                </form>
            </div>
        );
    }
}

export default withRouter(Register);