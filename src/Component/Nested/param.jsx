import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Link from '../Util/Links';
import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const Home = () => (
    <p>Home</p>
);

const Details = () => (
    <p>Details</p>
);

class Param extends Component {
    render() {
        return (
            <Fragment>
                <Divider />
                <p>Nested Params Route, Value of the Param -> {this.props.match.params.param} </p>
                <Divider />
                <Button color="primary" component={Link} to={`${this.props.match.url}`} title="Home">Home</Button>
                <Button color="primary" component={Link} to={`${this.props.match.url}/details`} title="Details">Details</Button>
                <Divider />
                <Route exact path={`${this.props.match.url}`} component={Home} />
                <Route exact path={`${this.props.match.url}/details`} component={Details} />
            </Fragment>
        );
    }
}

export default Param;
