import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react';
import { Popover, PopoverButton, PopoverPanel, PopoverBackdrop } from '@headlessui/react';
import MenuIcon from '../assets/menu.svg?react';
import MenuOpenIcon from '../assets/menu_open.svg?react';
import clsx from 'clsx';

import styles from './Sidebar.module.scss';

type SidebarProps = {
    children?: ReactNode;
    className?: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const Sidebar: FC<SidebarProps> = (props) => {
    const { children, className, ...restProps } = props;

    return (
        <div className={clsx(styles.sidebar, className)} {...restProps}>
            <Popover>
                {({ open }) => (
                    <>
                        <PopoverButton className={styles.button}>
                            {open ? (
                                <MenuIcon className={styles.icon} />
                            ) : (
                                <MenuOpenIcon className={styles.icon} />
                            )}
                        </PopoverButton>
                        <PopoverBackdrop transition className={styles.backdrop} />
                        <PopoverPanel transition anchor="left" className={styles.menuItems}>
                            Some item
                        </PopoverPanel>
                    </>
                )}
            </Popover>
            {children}
        </div>
    );
};
