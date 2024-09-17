import { FC, PropsWithChildren, useState } from 'react';

import clsx from 'clsx';

import MenuIcon from '../assets/menu.svg?react';
import OpenMenuIcon from '../assets/menu_open.svg?react';
import styles from './Drawer.module.scss';

export const Drawer: FC<PropsWithChildren> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div
                onClick={() => setIsOpen(false)}
                className={clsx(styles.backdrop, isOpen && styles.isVisible)}
            />

            <div className={clsx(styles.root, isOpen && styles.isOpen)}>
                <div className={styles.inner}>
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={styles.button}
                    >
                        {isOpen ? (
                            <MenuIcon className={styles.icon} />
                        ) : (
                            <OpenMenuIcon className={styles.icon} />
                        )}
                    </button>

                    <div className={styles.content}>Content</div>
                    {/*<Modal open={isOpen} onClose={setIsOpen} className={styles.drawerModal} transition>*/}
                    {/*    {children}*/}
                    {/*</Modal>*/}
                </div>
            </div>
        </>
    );
};
