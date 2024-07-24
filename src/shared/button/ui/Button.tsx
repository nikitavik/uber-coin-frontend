import { FC, ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { Button as ButtonHeadless } from '@headlessui/react';
import clsx from 'clsx';

import styles from './Button.module.scss';
import { Spinner } from '@shared/spinner';

type ButtonProps = {
    scheme: 'light' | 'dark';
    variant: 'xsmall' | 'small' | 'regular' | 'large';
    isLoading?: boolean;
} & PropsWithChildren<ComponentPropsWithoutRef<'button'>>;

export const Button: FC<ButtonProps> = (props) => {
    const { children, scheme, variant, isLoading = false, onClick, ...restProps } = props;

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
                styles[`button_${variant}`],
                styles[`button_${scheme}`]
            )}
            {...restProps}
        >
            {innerContent}
        </ButtonHeadless>
    );
};
