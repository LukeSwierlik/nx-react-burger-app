import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import {
    BuildControlBtnLess,
    BuildControlBtnMore,
    BuildControlLabel,
    BuildControlContainer,
} from './build-control.style';

interface BuildControlProps {
    label: string;
    removed: () => void;
    disabled: boolean;
    added: () => void;
}

export const BuildControl: FunctionComponent<BuildControlProps> = (
    props: PropsWithChildren<BuildControlProps>
) => {
    const { label, removed, disabled, added } = props;

    return (
        <BuildControlContainer>
            <BuildControlLabel>{label}</BuildControlLabel>

            <BuildControlBtnLess onClick={removed}>
                <FontAwesomeIcon icon={faMinus} />
            </BuildControlBtnLess>

            <BuildControlBtnMore onClick={added}>
                <FontAwesomeIcon icon={faPlus} />
            </BuildControlBtnMore>
        </BuildControlContainer>
    );
};
