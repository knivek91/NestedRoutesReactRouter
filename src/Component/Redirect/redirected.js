import React from 'react';

const Redirected = ({location}) => (
    <h1>Current Time passing as a <strong>location state</strong> {location.state.date.toLocaleTimeString()}</h1>
)

export default Redirected;