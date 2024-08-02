import { FC } from 'react';
import styles from './LogInModal.module.scss';
import clsx from 'clsx';

export const LogInModal: FC = () => {
    return <div className={clsx(styles.modal)}></div>;
};
