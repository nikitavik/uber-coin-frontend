import { FC, ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { Button as ButtonHeadless } from '@headlessui/react';
import clsx from 'clsx';

import { Spinner } from '@shared/spinner';

import styles from './Button.module.scss';

type ButtonSize = 'small' | 'regular' | 'large';
const sizeClassNameBySize: Record<ButtonSize, string> = {
    small: styles.smallSize,
    regular: styles.regularSize,
    large: styles.largeSize,
};

type ButtonProps = {
    scheme: 'light' | 'dark';
    size?: ButtonSize;
    isLoading?: boolean;
} & PropsWithChildren<ComponentPropsWithoutRef<'button'>>;

export const Button: FC<ButtonProps> = (props) => {
    const { children, scheme, size = 'regular', isLoading = false, onClick, ...restProps } = props;

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
                // TODO: Change to classMap
                styles[`button_${scheme}`]
            )}
            {...restProps}
        >
            {innerContent}
        </ButtonHeadless>
    );
};
