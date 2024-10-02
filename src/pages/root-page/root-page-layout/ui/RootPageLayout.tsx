import { FC } from 'react';

import BillIcon from '@entities/expense/assets/bill.svg?react';
import { expenseIcons } from '@entities/expense/assets/icons';
import { Container } from '@shared/container';
import { AccountBar } from '@widgets/accounts-bar';
import { AuthModal } from '@widgets/auth-modal';
import { BudgetBar } from '@widgets/budget-bar';
import { Drawer } from '@widgets/drawer';
import { ExpensesPanel } from '@widgets/expenses-panel';
import { Slider } from '@widgets/slider';

import styles from './RootPageLayout.module.scss';

export const RootPageLayout: FC = () => {
    const {
        ClothesIcon,
        DebtIcon,
        DrugsIcon,
        FastFoodIcon,
        FoodIcon,
        GiftIcon,
        InternetIcon,
        RestaurantIcon,
        TaxiIcon,
        TransportIcon,
    } = expenseIcons;

    const expenses = [
        {
            expenseName: 'Счет',
            deposit: '5000 $',
            consumption: 'Ежемесячно',
            children: <BillIcon />,
        },
        {
            expenseName: 'Одежда',
            deposit: '3000 $',
            consumption: 'Разово',
            children: <ClothesIcon className={styles.icon} />,
        },
        {
            expenseName: 'Долг',
            deposit: '8000 $',
            consumption: 'Ежемесячно',
            children: <DebtIcon className={styles.icon} />,
        },
        {
            expenseName: 'Медикаменты',
            deposit: '2000 $',
            consumption: 'Разово',
            children: <DrugsIcon className={styles.icon} />,
        },
        {
            expenseName: 'Фастфуд',
            deposit: '1500 $',
            consumption: 'Разово',
            children: <FastFoodIcon className={styles.icon} />,
        },
        {
            expenseName: 'Еда',
            deposit: '1000 $',
            consumption: 'Ежедневно',
            children: <FoodIcon className={styles.icon} />,
        },
        {
            expenseName: 'Подарок',
            deposit: '500 $',
            consumption: 'Разово',
            children: <GiftIcon className={styles.icon} />,
        },
        {
            expenseName: 'Интернет',
            deposit: '700 $',
            consumption: 'Ежемесячно',
            children: <InternetIcon className={styles.icon} />,
        },
        {
            expenseName: 'Ресторан',
            deposit: '4500 $',
            consumption: 'Разово',
            children: <RestaurantIcon className={styles.icon} />,
        },
        {
            expenseName: 'Такси',
            deposit: '1500 $',
            consumption: 'Разово',
            children: <TaxiIcon className={styles.icon} />,
        },
        {
            expenseName: 'Транспорт',
            deposit: '1200 $',
            consumption: 'Ежедневно',
            children: <TransportIcon className={styles.icon} />,
        },
    ];

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
                    <ExpensesPanel className={styles.expansesPanel} expenses={expenses} />
                </section>
            </main>

            <Drawer>
                <AuthModal />
            </Drawer>
        </Container>
    );
};
