import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';

import styles from './Expense.module.scss';

export type ExpenseProps = {
    expenseName: string;
    consumption: string;
    deposit: string;
    className?: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const Expense: FC<ExpenseProps> = (props) => {
    const { children, consumption, expenseName, deposit, className, ...restProps } = props;

    return (
        <div className={className} {...restProps}>
            <div className={styles.expense}>
                <span className={styles.expenseName}>{expenseName}</span>
                <div className={styles.icon}>{children}</div>
                <span className={styles.consumption}>{consumption}</span>
                <span className={styles.deposit}>{deposit}</span>
            </div>
        </div>
    );
};
