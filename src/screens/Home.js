import React from 'react';

import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="header clearfix">
                    <nav>
                        <ul className="nav nav-pills float-right">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Ingresar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Registrar</Link>
                            </li>
                        </ul>
                    </nav>
                    <h3 className="text-muted">R<i className="fa fa-at" aria-hidden="true"></i>D<i className="fa fa-bullseye" aria-hidden="true"></i>R</h3>
                </div>

                <div className="jumbotron">
                    <h1 className="display-3">Radar es la raja</h1>
                    <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><Link className="btn btn-lg btn-success" to="/register">Registrate ahora</Link></p>
                </div>

                <div className="row marketing">
                    <div className="col-lg-6">
                        <h4>Subheading</h4>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
                    </div>

                    <div className="col-lg-6">
                        <h4>Subheading</h4>
                        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </div>
                </div>

                <footer className="footer">
                    <p>© Radar 2017</p>
                </footer>

            </div>
        );
    }
}

export default Home;