import { FC } from 'react';

import { Container } from '@shared/container';
import { AccountBar } from '@widgets/accounts-bar';
import { BudgetBar } from '@widgets/budget-bar';
import { Sidebar } from '@widgets/drawer';
import { Drawer } from '@widgets/drawer';
import { AuthModal } from '@widgets/auth-modal';
import { ExpensesPanel } from '@widgets/expenses-panel';
import { Slider } from '@widgets/slider';

import styles from './RootPageLayout.module.scss';

export const RootPageLayout: FC = () => {
    return (
        <Container classes={{ root: styles.layout }}>
            <header>
                <BudgetBar />
            </header>

            <main className={styles.main}>
                <section>
                    <Slider />
                </section>

                <section className={styles.mainSection}>
                    <AccountBar />
                    <ExpensesPanel className={styles.expansesPanel} />
                </section>
            </main>

            <Sidebar className={styles.sidebarRight} /></div>
            <Drawer className={styles.sidebarRight}>
                <AuthModal />
            </Drawer>
        </div>
    );
};
