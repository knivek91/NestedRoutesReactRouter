import React from 'react';
import { Redirect as RedirectRoute } from 'react-router-dom';

class Redirect extends React.Component {

    state = {
        redirect: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                redirect: true
            });
        }, 3000);
    }

    render = () => {
        if(this.state.redirect) {
            return <RedirectRoute
                        to={{
                            pathname: "/redirected",
                            state: { date: new Date() }
                        }}
                    />
        }

        return (
            <h1>this page will be redirected after 3 seconds with params for the demo.</h1>
        );
    }

}

export default Redirect;