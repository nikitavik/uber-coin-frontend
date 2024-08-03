import { FC } from 'react';
import { Dialog, DialogPanel, DialogProps } from '@headlessui/react';
import clsx from 'clsx';
import styles from './Modal.module.scss';

export const Modal: FC<DialogProps> = (props) => {
    const { children, ...restProps } = props;

    return (
        <Dialog className={clsx(styles.overlay)} {...restProps}>
            <DialogPanel className={clsx(styles.modal)}>{children}</DialogPanel>
        </Dialog>
    );
};
