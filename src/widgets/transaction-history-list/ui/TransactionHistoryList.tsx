import { FC } from 'react';

import CreditCard from '@entities/account/assets/icons/credit-card/credit_card.svg?react';
import { Transaction } from '@entities/transaction';

import styles from './TransactionHistoryList.module.scss';

export const TransactionHistoryList: FC = () => {
    return (
        <div className={styles.transactionHistoryList}>
            <Transaction
                icon={<CreditCard />}
                currency="KGS"
                transactionCategory="Food"
                balance="1000"
            />
            <Transaction
                icon={<CreditCard />}
                currency="KGS"
                transactionCategory="Food"
                balance="1000"
            />
            <Transaction
                icon={<CreditCard />}
                currency="KGS"
                transactionCategory="Food"
                balance="1000"
            />
        </div>
    );
};
