import React, { FC, HTMLProps } from 'react';
import { Button as ButtonHeadless } from '@headlessui/react';
import styles from './button.module.scss';

type ButtonProps = {
    text: string;
} & HTMLProps<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ text }) => {
    return <ButtonHeadless className={styles.button}>{text}</ButtonHeadless>;
};
