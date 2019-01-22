import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ContainerStyle } from '../../styles';

const Container = ({classes, children}) => (
    <div className={classes.container}>
        {children}
    </div>
);

export default withStyles(ContainerStyle)(Container);
