import { FC, useState, useRef, FocusEvent } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Finance } from '@entities/finance';
import { TextField } from '@shared/text-field';

import styles from './BudgetBar.module.scss';

export const BudgetBar: FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [isOpen, setOpen] = useState<boolean>(false);
    const localRef = useRef<HTMLDivElement>(null);

    const finances = ['Expenses', 'Balance', 'Incomes'];
    const deposits = ['25 975,30 $', '30 975,30 $', '50 975,30 $'];

    const handleOpen = () => setOpen(true);
    const handleClose = (event: FocusEvent<HTMLDivElement>) => {
        if (localRef.current && !localRef.current.contains(event.relatedTarget as Node)) {
            setOpen(false);
        }
    };

    return (
        <TabGroup
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
            onFocus={handleOpen}
            onBlur={handleClose}
            ref={localRef}
        >
            <TabList className={styles.wrapper} ref={localRef}>
                {finances.map((value, index) => (
                    <Tab ref={localRef}>
                        <Finance financeType={value} deposit={deposits[index]} />
                    </Tab>
                ))}
                {isOpen && (
                    <TabPanels className={styles.tabPanels}>
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
                    </TabPanels>
                )}
            </TabList>
        </TabGroup>
    );
};
