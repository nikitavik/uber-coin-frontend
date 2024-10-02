import { ComponentPropsWithoutRef, FC, PropsWithChildren, useState } from 'react';

import clsx from 'clsx';

import { Expense, ExpenseProps } from '@entities/expense';
import { expenseIcons } from '@entities/expense/assets/icons';
import PlusIcon from '@entities/expense/assets/plus.svg?react';
import { Button } from '@shared/button';

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
            <div className={styles.buttonWrapper}>
                <Button
                    className={styles.icon}
                    children={<PlusIcon />}
                    onClick={() =>
                        createExpense({
                            expenseName: 'Счёт',
                            deposit: 1000,
                            consumption: 2000,
                            currency: 'rub',
                            children: <BillIcon className={styles.icon} />,
                        })
                    }
                />
            </div>

            {expensesArr.map((expense, index) => (
                <Expense
                    key={`expense_${index}`}
                    expenseName={expense.expenseName}
                    deposit={expense.deposit}
                    consumption={expense.consumption}
                    children={expense.children}
                    currency={expense.currency}
                />
            ))}
        </div>
    );
};
