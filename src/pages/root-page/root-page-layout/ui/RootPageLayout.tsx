import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react';
import { BudgetBar } from '@widgets/budget-bar';
import { AccountBar } from '@widgets/accounts-bar';
import { Sidebar } from '@shared/sidebar';
import { ExpensesPanel } from '@widgets/expenses-panel';

import styles from './RootPageLayout.module.scss';

type RootPageLayoutProps = {
    children?: ReactNode;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const RootPageLayout: FC<RootPageLayoutProps> = (props) => {
    const { children, ...restProps } = props;

    return (
        <div {...restProps} className={styles.layout}>
            <Sidebar className={styles.sidebarLeft} />
            <main className={styles.main}>
                <BudgetBar />
                <AccountBar />
                <ExpensesPanel />
            </main>
            {children}
        </div>
    );
};
