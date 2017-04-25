import React from 'react';

import { withRouter, Link } from 'react-router-dom';

class Tracker extends React.Component {

    register() {
        const { match, history } = this.props;
        console.log('about to register number');
        history.push(`${match.path}?configure`);
    }

    render() {
        const { match } = this.props;

        return (
            <div className="container">

                <form className="narrow-form">
                    <p>
                        Elige el modelo de tu tracker. <a href="#">Como saber?</a>
                    </p>

                    <select className="form-control custom-select">
                        <option selected>Brand</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="form-control custom-select">
                        <option selected>Model</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <button onClick={this.register.bind(this)} type="button"
                            className="btn btn-lg btn-primary btn-block" >
                        Registrar
                    </button>

                    <a className="btn btn-lg btn-block" target="_blank" href="https://www.google.com/#q=buy+tracker">
                        No tengo tracker
                    </a>

                    <Link className="btn btn-lg btn-block" to={`${match.path}?newprotocol`}>
                        Mi tracker no está en la lista
                    </Link>
                </form>
            </div>
        );
    }
}

export default withRouter(Tracker);