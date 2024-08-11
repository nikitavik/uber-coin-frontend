import { FC } from 'react';
import { Bar } from '@shared/bar';
import { Tab, TabPanel } from '@headlessui/react';
import { Account } from '@entities/account';

import styles from './AccountBar.module.scss';
import { CreditCard } from '@entities/account/assets/icons/credit-card';

export const AccountBar: FC = () => {
    const accountsNames = ['Tinkov', 'Sber', 'Alpha'];
    const deposits = ['25 975,30 $', '30 975,30 $', '50 975,30 $'];

    return (
        <Bar
            tabs={
                <>
                    {accountsNames.map((value, index) => (
                        <Tab>
                            <Account accountName={value} deposit={deposits[index]}>
                                <CreditCard />
                            </Account>
                        </Tab>
                    ))}
                </>
            }
            tabPanels={
                <>
                    {accountsNames.map((value) => (
                        <TabPanel
                            className={styles.tabPanel}
                        >{`Здесь можно проводить манипуляции со счетом ${value}`}</TabPanel>
                    ))}
                </>
            }
        />
    );
};
