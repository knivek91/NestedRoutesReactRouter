import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = props => <Link {...props}>{props.title}</Link>

export default LinkComponent;