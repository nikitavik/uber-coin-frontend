import { FC, ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react';

import styles from './Finance.module.scss';

type FinanceProps = {
    children?: ReactNode;
    financeType: 'Expenses' | 'Balance' | 'Incomes' | string;
    deposit: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const Finance: FC<FinanceProps> = (props) => {
    const { children, financeType, deposit, ...restProps } = props;

    const innerContent = (
        <>
            <span className={styles.financeText}>{financeType}</span>
            <span className={styles.financeText}>{deposit}</span>
        </>
    );

    return (
        <div className={styles.finance} {...restProps}>
            {innerContent}
        </div>
    );
};
