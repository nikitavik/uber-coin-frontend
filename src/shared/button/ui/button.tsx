import React, { FC, ComponentPropsWithoutRef, useState, useEffect } from 'react';
import { Button as ButtonHeadless } from '@headlessui/react';
import clsx from 'clsx';
import styles from './button.module.scss';

type ButtonProps = {
    text: string;
    isLoad?: boolean | undefined;
    scheme: 'light' | 'dark';
    variant: 'xsmall' | 'small' | 'regular' | 'large';
    func?: () => void;
} & ComponentPropsWithoutRef<'button'>;

export const Button: FC<ButtonProps> = ({ text, scheme, variant, isLoad, func, ...props }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState<string>(text);

    const handleClick = (): void => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setButtonText('Loaded');
            if (func) {
                func();
            }
        }, 2000);
        setTimeout(() => {
            setButtonText(text);
        }, 3000);
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
            {isLoad !== true && isLoading !== true && buttonText}
        </ButtonHeadless>
    );
};
