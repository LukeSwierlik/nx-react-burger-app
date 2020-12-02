import { Ingredients } from '@nx-react-burger-app/shared/interfaces';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { BuildControl } from '../build-control/build-control.component';
import { BuildControlsContainer, OrderBtn } from './build-controls.style';

const Controls = [
    { label: 'Salad', type: Ingredients.SALAD },
    { label: 'Bacon', type: Ingredients.BACON },
    { label: 'Cheese', type: Ingredients.CHEESE },
    { label: 'Meat', type: Ingredients.MEAT },
];

interface BuildControlsComponentProps {
    price: number;
    ingredientAdded: (control: Ingredients) => void;
    ingredientRemoved: (control: Ingredients) => void;
    purchasable: boolean;
    ordered: () => void;
    isAuth: boolean;
}

export const BuildControlsComponents: FunctionComponent<BuildControlsComponentProps> = (
    props: PropsWithChildren<BuildControlsComponentProps>
) => {
    return (
        <BuildControlsContainer>
            <p>
                Current Price: <b>{props.price.toFixed(2)}</b>
            </p>

            {Controls.map((control) => (
                <BuildControl
                    key={control.label}
                    label={control.label}
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}
                    // disabled={props.disabled[control.type]}
                />
            ))}

            <OrderBtn disabled={!props.purchasable} onClick={props.ordered}>
                {props.isAuth ? 'Order Now' : 'Sign Up To Order'}
            </OrderBtn>
        </BuildControlsContainer>
    );
};
