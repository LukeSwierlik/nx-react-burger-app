import React from 'react';
import burgerLogo from '../../../../../../apps/burger-app/src/assets/burger-logo.png';
import { LogoContainer, LogoImg } from './logo.style';

export const LogoComponent = () => {
    return (
        <LogoContainer>
            <LogoImg src={burgerLogo} alt={'MyBurger'} />
        </LogoContainer>
    );
};
