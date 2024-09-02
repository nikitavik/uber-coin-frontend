import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react';

import { Sidebar } from '@shared/sidebar';
import { AccountBar } from '@widgets/accounts-bar';
import { BudgetBar } from '@widgets/budget-bar';
import { ExpensesPanel } from '@widgets/expenses-panel';

import styles from './RootPageLayout.module.scss';

type RootPageLayoutProps = {
    children?: ReactNode;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const RootPageLayout: FC<RootPageLayoutProps> = (props) => {
    const { children, ...restProps } = props;

    return (
        <div {...restProps} className={styles.layout}>
            <main className={styles.main}>
                <BudgetBar className={styles.budgetBar} />
                <AccountBar className={styles.account} />
                <ExpensesPanel className={styles.expansesPanel} />
            </main>
            <Sidebar className={styles.sidebarRight} />
            {children}
        </div>
    );
};
