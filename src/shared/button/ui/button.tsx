import React, { FC, ComponentPropsWithoutRef } from 'react';
import { Button as ButtonHeadless } from '@headlessui/react';
import clsx from 'clsx';
import styles from './button.module.scss';

type ButtonProps = {
    text: string;
    isLoad?: boolean | undefined;
    scheme: 'light' | 'dark';
    variant: 'small' | 'regular' | 'large';
} & ComponentPropsWithoutRef<'button'>;

export const Button: FC<ButtonProps> = ({ text, scheme, variant, isLoad, ...props }) => {
    return (
        <ButtonHeadless
            {...props}
            className={clsx(
                styles.button,
                styles[`button_${variant}`],
                styles[`button_${scheme}`],
                isLoad === true && styles.button_load
            )}
        >
            {isLoad !== true && text}
        </ButtonHeadless>
    );
};
