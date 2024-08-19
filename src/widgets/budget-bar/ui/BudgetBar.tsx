import { FC } from 'react';
import { Bar } from '@shared/bar';
import { Tab, TabPanel } from '@headlessui/react';
import { Finance } from '@entities/finance';

import styles from './BudgetBar.module.scss';

type BudgetBarProps = { className?: string };

export const BudgetBar: FC<BudgetBarProps> = ({ className }) => {
    const finances = ['Expenses', 'Balance', 'Incomes'];
    const deposits = ['25 975,30 $', '30 975,30 $', '50 975,30 $'];

    return (
        <div className={className}>
            <Bar
                tabs={
                    <>
                        {finances.map((value, index) => (
                            <Tab>
                                <Finance financeType={value} deposit={deposits[index]} />
                            </Tab>
                        ))}
                    </>
                }
                tabPanels={
                    <>
                        <TabPanel className={styles.tabPanel}>Content 1</TabPanel>
                        <TabPanel className={styles.tabPanel}>Content 2</TabPanel>
                        <TabPanel className={styles.tabPanel}>Content 3</TabPanel>
                    </>
                }
            />
        </div>
    );
};
