import { FC, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './Operation.module.scss';

type OperationProps = {
    className?: string;
    icon: ReactNode;
    currency: string;
    operationCategory: string;
    account: string;
    balance: string;
};

export const Operation: FC<OperationProps> = (props) => {
    const { className, icon, currency, operationCategory, balance, account } = props;

    return (
        <div className={clsx(styles.operation, className)}>
            <div className={styles.operationDescription}>
                <span className={styles.iconWrapper}>{icon}</span>
                <span className={styles.account}>{account}</span>
                <span className={styles.operationCategory}>{operationCategory}</span>
            </div>
            <div className={styles.balanceWrapper}>
                <span className={styles.balance}>{balance}</span>
                <span className={styles.currency}>{currency}</span>
            </div>
        </div>
    );
};
