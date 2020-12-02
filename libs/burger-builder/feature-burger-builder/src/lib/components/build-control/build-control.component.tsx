import React, { FunctionComponent, PropsWithChildren } from 'react';

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
        <div>
            <div>{label}</div>

            <button onClick={removed}>Less</button>
            <button onClick={added}>More</button>
        </div>
    );
};
