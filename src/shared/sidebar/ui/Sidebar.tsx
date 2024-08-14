import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react';
import { Popover, PopoverButton, PopoverPanel, PopoverBackdrop } from '@headlessui/react';
import MenuIcon from '../assets/menu.svg?react';
import MenuOpenIcon from '../assets/menu_open.svg?react';
import clsx from 'clsx';

import styles from './Sidebar.module.scss';

type SideBarPosition = 'left' | 'right';
const positionClassNameByPosition: Record<SideBarPosition, string> = {
    left: styles.left,
    right: styles.right,
};

type SidebarProps = {
    children?: ReactNode;
    className?: string;
    sideBarPosition?: SideBarPosition;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const Sidebar: FC<SidebarProps> = (props) => {
    const { children, className, sideBarPosition = 'left', ...restProps } = props;

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
                        <PopoverPanel
                            transition
                            anchor="left"
                            className={clsx(
                                styles.menuItems,
                                positionClassNameByPosition[sideBarPosition]
                            )}
                        >
                            Some item
                        </PopoverPanel>
                    </>
                )}
            </Popover>
            {children}
        </div>
    );
};
