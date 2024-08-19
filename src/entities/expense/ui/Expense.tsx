import { FC, PropsWithChildren, ComponentPropsWithoutRef, ReactNode } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

import styles from './Expense.module.scss';

type ExpenseProps = {
    children: ReactNode;
    expenseName: string;
    deposit: string;
    className?: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const Expense: FC<ExpenseProps> = (props) => {
    const { children, expenseName, deposit, className, ...restProps } = props;

    return (
        <div className={className} {...restProps}>
            <Popover className={styles.expense}>
                <span className={styles.expenseName}>{expenseName}</span>
                <PopoverButton className={styles.icon}>{children}</PopoverButton>
                <span className={styles.deposit}>{deposit}</span>
                <PopoverPanel transition anchor="bottom" className={styles.popoverPanel}>
                    Info about expense
                </PopoverPanel>
            </Popover>
        </div>
    );
};
