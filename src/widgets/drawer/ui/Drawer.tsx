import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react';

import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode, useState } from 'react';
import { Modal } from '@shared/modal';
import MenuIcon from '../assets/menu.svg?react';
import OpenMenuIcon from '../assets/menu_open.svg?react';
import clsx from 'clsx';

import MenuIcon from '../assets/menu.svg?react';
import styles from './Sidebar.module.scss';

type DrawerProps = {
    children?: ReactNode;
    className?: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const Drawer: FC<DrawerProps> = (props) => {
    const { children, className, ...restProps } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={clsx(styles.drawer, className)} {...restProps}>
            <button type="button" onClick={() => setIsOpen(true)} className={styles.button}>
                {isOpen ? (
                    <MenuIcon className={styles.icon} />
                ) : (
                    <OpenMenuIcon className={styles.icon} />
                )}
            </button>
            <Modal open={isOpen} onClose={setIsOpen} className={styles.drawerModal} transition>
                {children}
            </Modal>
        </div>
    );
};
