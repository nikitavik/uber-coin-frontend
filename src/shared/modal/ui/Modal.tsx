import { FC } from 'react';
import clsx from 'clsx';

import { Dialog, DialogPanel, DialogProps } from '@headlessui/react';

import styles from './Modal.module.scss';

export const Modal: FC<DialogProps> = (props) => {
    const { children, className, ...restProps } = props;

    return (
        <Dialog className={clsx(styles.overlay)} {...restProps}>
            <DialogPanel className={clsx(styles.modal, className)}>{children}</DialogPanel>
        </Dialog>
    );
};
