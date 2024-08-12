import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react';
import { BudgetBar } from '@widgets/budget-bar';
import { AccountBar } from '@widgets/accounts-bar';
import { Sidebar } from '@shared/sidebar';
// TODO убрать expense и icon
import { Expense } from '@entities/expense';
import Icon from '@entities/account/assets/icons/credit-card/credit_card.svg?react';
import clsx from 'clsx';

import styles from './RootPageLayout.module.scss';

type RootPageLayoutProps = {
    children?: ReactNode;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const RootPageLayout: FC<RootPageLayoutProps> = (props) => {
    const { children, ...restProps } = props;

    return (
        <div {...restProps} className={styles.layout}>
            <Sidebar className={clsx(styles.sidebarLayout, styles.sidebarLeft)} />
            <main className={styles.main}>
                <BudgetBar className={styles.budget} />
                <AccountBar className={styles.account} />
                {/* //TODO сделать компонент */}
                <div className={styles.expanses}>
                    <Expense expenseName="Вкусно и точка" deposit="10 000 $">
                        {<Icon />}
                    </Expense>
                    <Expense expenseName="Вкусно и точка" deposit="10 000 $">
                        {<Icon />}
                    </Expense>
                    <Expense expenseName="Вкусно и точка" deposit="10 000 $">
                        {<Icon />}
                    </Expense>
                    <Expense expenseName="Вкусно и точка" deposit="10 000 $">
                        {<Icon />}
                    </Expense>
                    <Expense expenseName="Вкусно и точка" deposit="10 000 $">
                        {<Icon />}
                    </Expense>
                    <Expense expenseName="Вкусно и точка" deposit="10 000 $">
                        {<Icon />}
                    </Expense>
                    <Expense expenseName="Вкусно и точка" deposit="10 000 $">
                        {<Icon />}
                    </Expense>
                    <Expense expenseName="Вкусно и точка" deposit="10 000 $">
                        {<Icon />}
                    </Expense>
                    <Expense expenseName="Вкусно и точка" deposit="10 000 $">
                        {<Icon />}
                    </Expense>
                    <Expense expenseName="Вкусно и точка" deposit="10 000 $">
                        {<Icon />}
                    </Expense>
                    <Expense expenseName="Вкусно и точка" deposit="10 000 $">
                        {<Icon />}
                    </Expense>
                </div>
            </main>
            <Sidebar className={clsx(styles.sidebarLayout, styles.sidebarRight)} />
            {children}
        </div>
    );
};
