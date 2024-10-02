import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';

import clsx from 'clsx';

import { Expense, ExpenseProps } from '@entities/expense';

import styles from './ExpensesPanel.module.scss';

type ExpensesPanelProps = {
    className?: string;
    expenses: Array<ExpenseProps>;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const ExpensesPanel: FC<ExpensesPanelProps> = (props) => {
    const { children, className, expenses, ...restProps } = props;

    return (
        <div className={clsx(styles.wrapper, className)} {...restProps}>
            {expenses.map((expense, index) => (
                <Expense
                    key={`expense_${index}`}
                    expenseName={expense.expenseName}
                    deposit={expense.deposit}
                    consumption={expense.consumption}
                    children={expense.children}
                />
            ))}
        </div>
    );
};
