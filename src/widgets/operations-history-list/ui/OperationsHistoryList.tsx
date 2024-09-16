import { FC } from 'react';

import CreditCard from '@entities/account/assets/icons/credit-card/credit_card.svg?react';
import { Operation } from '@entities/operation';

import styles from './OperationsHistoryList.module.scss';

export const OperationsHistoryList: FC = () => {
    return (
        <div className={styles.operationsHistoryList}>
            <h1>Operations list</h1>
            <div className={styles.operationsBlock}>
                <div className={styles.operationsHeader}>
                    <span className={styles.operationsDate}>Yesterday</span>
                    <span className={styles.balance}>1000</span>
                </div>
                <div className={styles.operaions}>
                    <Operation
                        icon={<CreditCard />}
                        currency="KGS"
                        operationCategory="Food"
                        balance="1000"
                    />
                    <Operation
                        icon={<CreditCard />}
                        currency="KGS"
                        operationCategory="Food"
                        balance="1000"
                    />
                    <Operation
                        icon={<CreditCard />}
                        currency="KGS"
                        operationCategory="Food"
                        balance="1000"
                    />
                </div>
            </div>
        </div>
    );
};
