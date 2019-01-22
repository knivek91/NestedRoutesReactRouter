import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {RoutesLinks} from '../../routes';
import Link from '../Util/Links';
import NestedParamComponent from './param';

const AuxiliarComponent = ({title}) => <h3>{title}</h3>;
const NestedRoutes = url => RoutesLinks.map(item => ({ to: `${url}${item.to}`, title: `Nested-${item.title}` }) );
const NestedRoutesComponent = url => RoutesLinks.map(item => ({
    render: () => <AuxiliarComponent title={item.title} />, 
    path: `${url}${item.to}`, 
    exact: true }));

class Nested extends Component {
    render() {
        const { match } = this.props;
        const myNestedRoutes = NestedRoutes(match.path);
        const myNestedRoutesComponent = NestedRoutesComponent(match.path);
        return (
            <Fragment>
                <h3>Nested Routes</h3>
                { myNestedRoutes.map((item, index) => <Button key={index}
                    color="secondary" 
                    component={Link} 
                    to={item.to} 
                    title={item.title}>
                        {item.title}
                    </Button> 
                )}
                { myNestedRoutesComponent.map((item, index) => <Route key={index} {...item} /> ) } 

                <Button color="secondary" component={Link} to={`/nested/nested/${new Date().getTime()}`} title="Nested Params">Nested Params</Button>
                <Route  path="/nested/nested/:param" component={NestedParamComponent} />
            </Fragment>
        );
    }
}

export default Nested;
