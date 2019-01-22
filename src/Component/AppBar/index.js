import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import { AppBarStyle } from '../../styles';
import Link from '../Util/Links';
import { RoutesLinks }  from '../../routes';

const AppBarComponent = ({classes}) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
                Nested Routes Dump Lab
            </Typography>
                {RoutesLinks.map((item, index) => <Button key={index} color="inherit" component={Link} to={item.to} title={item.title}>{item.title}</Button>) }
        </Toolbar>
    </AppBar>
);

export default withStyles(AppBarStyle)(AppBarComponent);