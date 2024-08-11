import { FC } from 'react';
import { RootPage } from '@pages/root-page';
import './styles/global.scss';
import { RootPageLayout } from '@pages/root-page';
import { Account } from '@entities/account';
import { CreditCard } from '@entities/account/assets/icons/credit-card';

export const App: FC = () => {
    return (
        <RootPage>
            <RootPageLayout />
            <Account accountName="Account" deposit={'111111$'}>
                <CreditCard />
            </Account>
        </RootPage>
    );
};
