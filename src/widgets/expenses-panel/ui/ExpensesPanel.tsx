import { FC, PropsWithChildren, ComponentPropsWithoutRef, ReactNode } from 'react';
import { Expense } from '@entities/expense';
import BurgerIcon from '@entities/expense/assets/burger.svg?react';
import clsx from 'clsx';

import styles from './ExpensesPanel.module.scss';

type ExpensesPanelProps = {
    children?: ReactNode;
    className?: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const ExpensesPanel: FC<ExpensesPanelProps> = (props) => {
    const { children, className, ...restProps } = props;
    const { expenseName, deposit, icon } = {
        expenseName: 'Вкусно и точка',
        deposit: '10 000 $',
        icon: <BurgerIcon className={styles.icon} />,
    };

    return (
        <div className={clsx(styles.wrapper, className)} {...restProps}>
            {Array(10)
                .fill(1)
                .map((value, index) => (
                    <Expense
                        expenseName={expenseName}
                        deposit={deposit}
                        key={`key_${value + index}`}
                    >
                        {icon}
                    </Expense>
                ))}
        </div>
    );
};
