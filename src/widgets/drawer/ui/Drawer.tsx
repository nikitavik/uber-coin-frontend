import { FC, KeyboardEventHandler, PropsWithChildren, useState } from 'react';

import clsx from 'clsx';

import MenuIcon from '../assets/menu.svg?react';
import OpenMenuIcon from '../assets/menu_open.svg?react';
import styles from './Drawer.module.scss';

export const Drawer: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleEscape: KeyboardEventHandler = (event) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    return (
        <>
            <div
                role="none"
                onClick={() => setIsOpen(false)}
                className={clsx(styles.backdrop, isOpen && styles.isVisible)}
            />

            <div className={clsx(styles.root, isOpen && styles.isOpen)}>
                <div className={styles.inner}>
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        onKeyDown={handleEscape}
                        className={styles.button}
                    >
                        {isOpen ? (
                            <MenuIcon className={styles.icon} />
                        ) : (
                            <OpenMenuIcon className={styles.icon} />
                        )}
                    </button>

                    <div className={styles.content}>{children}</div>
                </div>
            </div>
        </>
    );
};
