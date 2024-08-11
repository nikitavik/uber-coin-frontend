import { FC } from 'react';
import { Bar } from '@shared/bar';
import { Tab, TabPanel } from '@headlessui/react';
import { Finance } from '@entities/finance';
import { TextField } from '@shared/text-field';

import styles from './BudgetBar.module.scss';

export const BudgetBar: FC = () => {
    const finances = ['Expenses', 'Balance', 'Incomes'];
    const deposits = ['25 975,30 $', '30 975,30 $', '50 975,30 $'];

    return (
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
                    <TabPanel className={styles.tabPanel}>
                        <>
                            <TextField label="label" />
                            <TextField label="label" />
                            <TextField label="label" />
                            <TextField label="label" />
                        </>
                    </TabPanel>
                    <TabPanel className={styles.tabPanel}>Content 2</TabPanel>
                    <TabPanel className={styles.tabPanel}>Content 3</TabPanel>
                </>
            }
        />
    );
};
