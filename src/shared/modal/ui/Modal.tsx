import { FC } from 'react';
import clsx from 'clsx';

import { Dialog, DialogBackdrop, DialogPanel, DialogProps } from '@headlessui/react';

import styles from './Modal.module.scss';

export const Modal: FC<DialogProps> = (props) => {
    const { children, className, ...restProps } = props;

    return (
        <Dialog transition className={styles.root} {...restProps}>
            <DialogBackdrop transition className={styles.backdrop} />

            <div className={styles.modalContainer}>
                <DialogPanel transition className={clsx(styles.modal, className)}>
                    {children}
                </DialogPanel>
            </div>
        </Dialog>
    );
};
