import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode, useState } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
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

    const handleOpen = () => setOpen(!isOpen);

    return (
        <div className={clsx(styles.sidebar, className)} {...restProps}>
            <Popover>
                <PopoverButton onClick={handleOpen} className={styles.button}>
                    {isOpen ? (
                        <MenuIcon className={styles.icon} />
                    ) : (
                        <MenuOpenIcon className={styles.icon} />
                    )}
                </PopoverButton>
                <PopoverPanel anchor="left" className={styles.menuItems}>
                    Some item
                </PopoverPanel>
            </Popover>
            {children}
        </div>
    );
};
