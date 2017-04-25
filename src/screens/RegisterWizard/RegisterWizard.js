import React from 'react';

import Register from './Register';
import Tracker from './Tracker';
import Configure from './Configure';
import Create from './Create';

class RegisterWizard extends React.Component {

    //TODO: store this state in redux
    //TODO: show already gained tracker info

    render() {

        const { match, location } = this.props;

        console.log(match, location);

        let Component = Register;

        switch (location.search) {
            case "?tracker":
                Component = Tracker;
                break;
            case "?newprotocol":
                Component = () => <div>Agregar Protocolo</div>;
                break;
            case "?configure":
                Component = Configure;
                break;
            case "?create":
                Component = Create;
                break;
            default:
                Component = Register;
        }


        return (
            <div>
                <Component />
            </div>
        );
    }
}

export default RegisterWizard;