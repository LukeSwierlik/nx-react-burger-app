import React from 'react';
import { BackdropContainer } from './backdrop.style';

export const BackdropComponent = (props) => {
    return props.show ? <BackdropContainer onClick={props.clicked} /> : null;
};
