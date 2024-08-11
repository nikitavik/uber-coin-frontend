import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react';
import { BudgetBar } from '@widgets/budget-bar';
import { AccountBar } from '@widgets/accounts-bar';
import { Sidebar } from '@shared/sidebar';
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
            </main>
            <Sidebar className={clsx(styles.sidebarLayout, styles.sidebarRight)} />
            {children}
        </div>
    );
};
