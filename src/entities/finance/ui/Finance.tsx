import { FC, ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react';

import styles from './Finance.module.scss';

type FinanceProps = {
    children?: ReactNode;
    financeType: 'Expenses' | 'Balance' | 'Incomes';
    deposit: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'button'>>;

export const Finance: FC<FinanceProps> = (props) => {
    const { children, financeType, deposit, ...restProps } = props;

    const innerContent = (
        <>
            <span className={styles.financeText}>{financeType}</span>
            <span className={styles.financeText}>{deposit}</span>
        </>
    );

    return (
        <button className={styles.finance} {...restProps} type="button">
            {innerContent}
        </button>
    );
};
