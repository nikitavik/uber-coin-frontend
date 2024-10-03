import { ComponentPropsWithoutRef, FC, PropsWithChildren, useState } from 'react';

import clsx from 'clsx';

import { Expense, ExpenseProps } from '@entities/expense';
import { expenseIcons } from '@entities/expense/assets/icons';

import styles from './ExpensesPanel.module.scss';

type ExpensesPanelProps = {
    className?: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const ExpensesPanel: FC<ExpensesPanelProps> = (props) => {
    const { children, className, ...restProps } = props;

    const [expensesArr, setExpensesArr] = useState<ExpenseProps[]>([]);

    const { BillIcon } = expenseIcons;
    const createExpense = (expenseProps: ExpenseProps) => {
        setExpensesArr([...expensesArr, { ...expenseProps }]);
    };

    return (
        <div className={clsx(styles.wrapper, className)} {...restProps}>
            <button
                onClick={() =>
                    createExpense({
                        expenseName: 'Счёт',
                        deposit: '5000 $',
                        consumption: 'Ежемесячно',
                        children: <BillIcon className={styles.icons} />,
                    })
                }
                type="button"
            >
                +
            </button>
            {expensesArr.map((expense, index) => (
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
