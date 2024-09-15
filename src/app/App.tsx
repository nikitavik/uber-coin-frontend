import { FC } from 'react';

import CreditCard from '@entities/account/assets/icons/credit-card/credit_card.svg?react';
import { Transaction } from '@entities/transaction';
import { RootPage } from '@pages/root-page';
import { RootPageLayout } from '@pages/root-page';

import './styles/global.scss';

export const App: FC = () => {
    return (
        <RootPage>
            <RootPageLayout />
            <Transaction
                icon={<CreditCard />}
                currency="KGS"
                transactionCategory="Food"
                balance="1000"
            />
        </RootPage>
    );
};
