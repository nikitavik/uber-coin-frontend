import { FC, ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';

type ModalProps = PropsWithChildren<ComponentPropsWithoutRef<'form'>>;

export const Modal: FC<ModalProps> = (props) => {
    const { children, ...restProps } = props;

    return (
        <form className={clsx(styles.modal)} {...restProps}>
            {children}
        </form>
    );
};
