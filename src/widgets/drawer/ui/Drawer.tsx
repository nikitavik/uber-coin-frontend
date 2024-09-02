import { FC, PropsWithChildren, useState } from 'react';

import { Modal } from '@shared/modal';

import MenuIcon from '../assets/menu.svg?react';
import OpenMenuIcon from '../assets/menu_open.svg?react';
import styles from './Drawer.module.scss';

export const Drawer: FC<PropsWithChildren> = (props) => {
    const { children } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
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
        </>
    );
};
