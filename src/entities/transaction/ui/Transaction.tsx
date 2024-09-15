import { FC, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './Transaction.module.scss';

type TransactionProps = {
    className?: string;
    icon: ReactNode;
    currency: string;
    transactionCategory: string;
    balance: string;
};

export const Transaction: FC<TransactionProps> = (props) => {
    const { className, icon, currency, transactionCategory, balance } = props;

    return (
        <div className={clsx(styles.transaction, className)}>
            <div className={styles.transactionDescription}>
                <span className={styles.icon}>{icon}</span>
                <span className={styles.currency}>{currency}</span>
                <span className={styles.transactionCategory}>{transactionCategory}</span>
            </div>
            <div className={styles.balanceWrapper}>
                <span className={styles.balance}>{balance}</span>
                <span className={styles.currency}>{currency}</span>
            </div>
        </div>
    );
};
