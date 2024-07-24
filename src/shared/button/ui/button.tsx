import React, { FC, ComponentPropsWithoutRef, useState } from 'react';
import { Button as ButtonHeadless } from '@headlessui/react';
import clsx from 'clsx';
import styles from './button.module.scss';

type ButtonProps = {
    text: string;
    isLoad?: boolean | undefined;
    scheme: 'light' | 'dark';
    variant: 'small' | 'regular' | 'large';
    func?: (e?: HTMLButtonElement) => void;
} & ComponentPropsWithoutRef<'button'>;

export const Button: FC<ButtonProps> = ({ text, scheme, variant, isLoad, func, ...props }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            if (func) {
                const elem = e.target as HTMLButtonElement;
                func(elem);
            }
        }, 2000);
        setTimeout(() => {
            if (func) {
                const elem = e.target as HTMLButtonElement;
                func(elem);
            }
        }, 2100);
    };

    return (
        <ButtonHeadless
            {...props}
            className={clsx(
                styles.button,
                styles[`button_${variant}`],
                styles[`button_${scheme}`],
                (isLoad === true || isLoading === true) && styles.button_load
            )}
            onClick={handleClick}
        >
            {isLoad !== true && isLoading !== true && text}
        </ButtonHeadless>
    );
};
