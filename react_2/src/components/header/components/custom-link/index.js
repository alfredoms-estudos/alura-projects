import React from 'react';
import { NavLink } from 'react-router-dom';

export const CustomLink = (props) => {
    return (
        <NavLink activeStyle={{fontWeight: 'bold'}} {...props} />
    )
};

