import React, { FC, ComponentPropsWithoutRef, useState } from 'react';
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
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleClick = (): void => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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
