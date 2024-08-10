import { FC } from 'react';
import { RootPage } from '@pages/root-page';
import './styles/global.scss';
import { RootPageLayout } from '@pages/root-page';

export const App: FC = () => {
    return (
        <RootPage>
            <RootPageLayout />
        </RootPage>
    );
};
