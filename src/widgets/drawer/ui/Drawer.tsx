import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react';

import clsx from 'clsx';

import MenuIcon from '../assets/menu.svg?react';
import styles from './Sidebar.module.scss';

type DrawerProps = {
    children?: ReactNode;
    className?: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const Sidebar: FC<DrawerProps> = (props) => {
    const { children, className, ...restProps } = props;

    return (
        <div className={clsx(styles.drawer, className)} {...restProps}>
            <MenuIcon className={styles.icon} />

            {children}
        </div>
    );
};
