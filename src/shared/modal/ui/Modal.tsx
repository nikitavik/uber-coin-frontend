import { FC, ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';

type ModalType = 'logIn' | 'signUp';

const modalTypeClassNameByType: Record<ModalType, string> = {
    logIn: styles.logIn,
    signUp: styles.signUp,
};

type ModalProps = {
    type: ModalType;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const Modal: FC<ModalProps> = (props) => {
    const { children, type, ...restProps } = props;

    return (
        <div className={clsx(styles.modal, modalTypeClassNameByType[type])} {...restProps}>
            {children}
        </div>
    );
};
