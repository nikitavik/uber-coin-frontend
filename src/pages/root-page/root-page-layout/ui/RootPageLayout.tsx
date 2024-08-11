import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react';
import { BudgetBar } from '@widgets/budget-bar';
import { AccountBar } from '@widgets/accounts-bar';
import { Sidebar } from '@shared/sidebar';
import styles from './RootPageLayout.module.scss';

type RootPageLayoutProps = {
    children?: ReactNode;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const RootPageLayout: FC<RootPageLayoutProps> = (props) => {
    const { children, ...restProps } = props;

    return (
        <div {...restProps} className={styles.layout}>
            <Sidebar className={styles.sidebarLeft} />
            <BudgetBar className={styles.budget} />
            <AccountBar className={styles.account} />
            <Sidebar className={styles.sidebarRight} />
            {children}
        </div>
    );
};
