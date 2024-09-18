import { FC } from 'react';

import { Container } from '@shared/container';
import { AccountBar } from '@widgets/accounts-bar';
import { AuthModal } from '@widgets/auth-modal';
import { BudgetBar } from '@widgets/budget-bar';
import { Drawer } from '@widgets/drawer';
import { ExpensesPanel } from '@widgets/expenses-panel';
import { OperationsHistoryList } from '@widgets/operations-history-list';
import { Slider } from '@widgets/slider';

import styles from './RootPageLayout.module.scss';

export const RootPageLayout: FC = () => {
    return (
        <Container classes={{ root: styles.layout }}>
            <header>
                <BudgetBar />
            </header>

            <main className={styles.main}>
                <section className={styles.sliderSection}>
                    <Slider />
                    <OperationsHistoryList />
                </section>

                <section className={styles.mainSection}>
                    <AccountBar />
                    <ExpensesPanel className={styles.expansesPanel} />
                </section>
            </main>

            <Drawer>
                <AuthModal />

                <div>Список настроек</div>
            </Drawer>
        </Container>
    );
};
