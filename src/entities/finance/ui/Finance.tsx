import { FC, ComponentProps } from 'react';

import styles from './Finance.module.scss';

type FinanceProps = {
    financeType: 'Expenses' | 'Balance' | 'Incomes' | string;
    deposit: string;
} & ComponentProps<'div'>;

export const Finance: FC<FinanceProps> = (props) => {
    const { financeType, deposit, ...restProps } = props;

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
