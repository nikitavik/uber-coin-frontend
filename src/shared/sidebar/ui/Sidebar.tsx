import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
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

    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className={clsx(styles.sidebar, className)} {...restProps}>
            <Menu>
                <MenuButton onClick={() => setOpen(!isOpen)} className={styles.button}>
                    {isOpen ? (
                        <MenuIcon className={styles.icon} />
                    ) : (
                        <MenuOpenIcon className={styles.icon} />
                    )}
                </MenuButton>
                <MenuItems anchor="left" className={styles.menuItems}>
                    <MenuItem as={'div'}>Some item</MenuItem>
                </MenuItems>
            </Menu>
            {children}
        </div>
    );
};
