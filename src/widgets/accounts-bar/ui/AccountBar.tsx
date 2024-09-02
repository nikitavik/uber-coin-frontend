import { FC, ReactNode } from 'react';

import clsx from 'clsx';

import { Account } from '@entities/account';
import CreditCard from '@entities/account/assets/icons/credit-card/credit_card.svg?react';
import { Tab, TabPanel } from '@headlessui/react';
import { Bar } from '@shared/bar';

import styles from './AccountBar.module.scss';

type AccountBarProps = {
    children?: ReactNode;
    className?: string;
};

export const AccountBar: FC<AccountBarProps> = (props) => {
    const { children, className } = props;

    return (
        <div className={clsx(styles.accountBar, className)}>
            <Bar
                tabs={
                    <>
                        {Array(30)
                            .fill({ account: '25 975,30 $' })
                            .map((value) => (
                                <Tab>
                                    <Account
                                        accountName={`${Object.entries(value)[0][0]}`}
                                        deposit={`${Object.entries(value)[0][1]}`}
                                    >
                                        <CreditCard />
                                    </Account>
                                </Tab>
                            ))}
                        {children}
                    </>
                }
                tabPanels={
                    <>
                        {Array(30)
                            .fill({ account: '25 975,30 $' })
                            .map((value) => (
                                <TabPanel
                                    className={styles.tabPanel}
                                >{`Здесь можно проводить манипуляции со счетом ${Object.entries(value)[0]}`}</TabPanel>
                            ))}
                    </>
                }
            />
        </div>
    );
};
