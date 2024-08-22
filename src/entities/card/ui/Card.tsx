import { FC } from 'react';
import clsx from 'clsx';
import styles from './Card.module.scss';

type CardProps = {
    className?: string;
    balance: string;
    income: string;
    outcome: string;
};

export const Card: FC<CardProps> = (props) => {
    const { className, balance, income, outcome } = props;

    return (
        <div className={clsx(styles.card, className)}>
            <div className={styles.balanceList}>
                <span className={styles.text}>Balance</span>
                <span className={styles.balance}>{balance}</span>
                <span className={styles.text}>Overall: ${balance}</span>
            </div>
            <div className={styles.finances}>
                <div className={styles.income}>
                    <span className={styles.text}>Income</span>
                    <span className={styles.financesIncome}>{income}</span>
                </div>
                <div className={styles.outcome}>
                    <span className={styles.text}>Outcome</span>
                    <span className={styles.financesOutcome}>{outcome}</span>
                </div>
            </div>
        </div>
    );
};
