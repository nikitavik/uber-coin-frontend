import { FC, ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { Button as ButtonHeadless } from '@headlessui/react';
import clsx from 'clsx';

import { Spinner } from '@shared/spinner';

import styles from './Button.module.scss';

type ButtonScheme = 'light' | 'dark';
const schemeClassNameByScheme: Record<ButtonScheme, string> = {
    light: styles.light,
    dark: styles.dark,
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
        onClick,
        ...restProps
    } = props;

    const hasChildren = children !== undefined;

    const innerContent = (
        <span className={styles.contentContainer}>
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
        </span>
    );

    return (
        <ButtonHeadless
            className={clsx(
                styles.button,
                sizeClassNameBySize[size],
                schemeClassNameByScheme[scheme],
                isFullWidth && styles.button_fullwidth
            )}
            {...restProps}
        >
            {innerContent}
        </ButtonHeadless>
    );
};
