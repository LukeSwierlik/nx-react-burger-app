import React from 'react';
import { ButtonContainer } from './button.style';

export const ButtonComponent = (props) => {
    return <ButtonContainer>{props.children}</ButtonContainer>;
};
