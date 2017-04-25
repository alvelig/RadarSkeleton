import React from 'react';

import { Link, withRouter } from 'react-router-dom';

class Configure extends React.Component {

    register() {
        const { match, history } = this.props;
        console.log('about to register number');
        history.push(`/radar`);
    }

    render() {
        const { match } = this.props;

        return (
            <div className="container">

                <form className="narrow-form">
                    <p>
                        Ingresa el número de telefono del chip (tarjeta sim) que está en el tracker. <a href="#">Como saber?</a>
                    </p>

                    <label htmlFor="inputEmail" className="sr-only">Nombre</label>
                    <input placeholder="Nombre" type="email" id="inputEmail" className="form-control"  required="" autoFocus="" />
                    <select className="form-control custom-select">
                        <option disabled selected>Tipo</option>
                        <option value="1">Bici</option>
                        <option value="2">Auto</option>
                        <option value="3">Mascota</option>
                        <option value="0">Otro</option>
                    </select>

                    <button onClick={this.register.bind(this)} type="button"
                            className="btn btn-lg btn-primary btn-block" >
                        Registrar
                    </button>
                </form>
            </div>
        );
    }
}

export default withRouter(Configure);