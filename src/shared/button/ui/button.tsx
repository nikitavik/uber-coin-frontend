import React, { FC, HTMLProps } from 'react';
import { Button as ButtonHeadless } from '@headlessui/react';
import clsx from 'clsx';
import styles from './button.module.scss';

type ButtonProps = {
    text: string;
    scheme: 'light' | 'dark';
    variant: 'small' | 'regular' | 'large';
} & React.ComponentPropsWithoutRef<'button'>;

export const Button: FC<ButtonProps> = ({ text, scheme, variant, ...props }) => {
    return (
        <ButtonHeadless
            {...props}
            className={clsx(styles.button, styles[`button_${variant}`], styles[`button_${scheme}`])}
        >
            {text}
        </ButtonHeadless>
    );
};
