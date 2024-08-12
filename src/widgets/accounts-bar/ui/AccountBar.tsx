import { FC, ReactNode } from 'react';
import { Bar } from '@shared/bar';
import { Tab, TabPanel } from '@headlessui/react';
import { Account } from '@entities/account';
import { CreditCard } from '@entities/account/assets/icons/credit-card';
import { Income } from '@entities/account/assets/icons/income';
import styles from './AccountBar.module.scss';

type AccountBarProps = {
    children?: ReactNode;
    className?: string;
};

export const AccountBar: FC<AccountBarProps> = (props) => {
    const accountsNames = ['Tinkov', 'Sber', 'Alpha'];
    const deposits = ['25 975,30 $', '30 975,30 $', '50 975,30 $'];
    const { children, className } = props;
    const { accountsName, deposit } = { accountsName: 'Income', deposit: '25 975,30 $' };

    return (
        <div className={className}>
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
                        {children}
                        <Tab>
                            <Account accountName={accountsName} deposit={deposit}>
                                <Income />
                            </Account>
                        </Tab>
                    </>
                }
                tabPanels={
                    <>
                        {accountsNames.map((value) => (
                            <TabPanel
                                className={styles.tabPanel}
                            >{`Здесь можно проводить манипуляции со счетом ${value}`}</TabPanel>
                        ))}
                        <TabPanel
                            className={styles.tabPanel}
                        >{`Здесь можно проводить манипуляции со счетом ${accountsName}`}</TabPanel>
                    </>
                }
            />
        </div>
    );
};
