import { FC, useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Finance } from '@entities/finance';

import styles from './BudgetBar.module.scss';

export const BudgetBar: FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const finances = ['Expenses', 'Balance', 'Incomes'];
    const deposits = ['25 975,30 $', '30 975,30 $', '50 975,30 $'];

    return (
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <TabList className={styles.wrapper}>
                {finances.map((value, index) => (
                    <Tab>
                        <Finance financeType={value} deposit={deposits[index]} />
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                <TabPanel>Content 1</TabPanel>
                <TabPanel>Content 2</TabPanel>
                <TabPanel>Content 3</TabPanel>
            </TabPanels>
        </TabGroup>
    );
};
