import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';

import clsx from 'clsx';

import { Button as ButtonHeadless } from '@headlessui/react';
import { Spinner } from '@shared/spinner';

import styles from './Button.module.scss';

// TODO: Move text to variant or remove if obsolete
type ButtonScheme = 'light' | 'dark' | 'text';
const schemeClassNameByScheme: Record<ButtonScheme, string> = {
    light: styles.light,
    dark: styles.dark,
    text: styles.text,
};

type ButtonSize = 'small' | 'regular' | 'large';
const sizeClassNameBySize: Record<ButtonSize, string> = {
    small: styles.smallSize,
    regular: styles.regularSize,
    large: styles.largeSize,
};

type ButtonProps = {
    scheme?: ButtonScheme;
    size?: ButtonSize;
    isLoading?: boolean;
    isFullWidth?: boolean;
} & PropsWithChildren<ComponentPropsWithoutRef<'button'>>;

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        scheme = 'dark',
        size = 'regular',
        isLoading = false,
        isFullWidth = false,
        ...restProps
    } = props;

    const hasChildren = children !== undefined;

    const innerContent = (
        <>
            {hasChildren && (
                <span className={clsx(styles.content, isLoading && styles.isContentHidden)}>
                    {children}
                </span>
            )}

            {isLoading && (
                <span className={styles.loader}>
                    <Spinner />
                </span>
            )}
        </>
    );

    return (
        <ButtonHeadless
            className={clsx(
                styles.button,
                sizeClassNameBySize[size],
                schemeClassNameByScheme[scheme],
                isFullWidth && styles.fullWidth
            )}
            {...restProps}
        >
            {innerContent}
        </ButtonHeadless>
    );
};
