import React, { FC, HTMLProps } from 'react';
import { Button as ButtonHeadless } from '@headlessui/react';
import styles from './button.module.scss';

type ButtonProps = {
    text: string;
} & React.ComponentPropsWithoutRef<'button'>;

export const Button: FC<ButtonProps> = ({ text, ...props }) => {
    return (
        <ButtonHeadless {...props} className={styles.button}>
            {text}
        </ButtonHeadless>
    );
};
