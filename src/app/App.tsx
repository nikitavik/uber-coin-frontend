import { FC } from 'react';

import './styles/global.scss';

import styles from './App.module.scss';
import { Button } from '@shared/button';

export const App: FC = () => {
    return (
        <>
            <div className={styles.root}>App</div>
            <div className={styles.container}>
                <Button scheme="light" size="small" isFullWidth />

                <Button scheme="light" size="small" />

                <Button scheme="light" size="regular">
                    Uber
                </Button>
                <Button scheme="light" size="large" isFullWidth>
                    Uber
                </Button>
                <Button scheme="dark" size="small" disabled>
                    Uber
                </Button>
                <Button scheme="dark" size="small" data-hover>
                    Uber
                </Button>
                <Button scheme="dark" size="regular" data-active>
                    Uber
                </Button>
                <Button scheme="dark" size="large">
                    Uber
                </Button>
                <Button scheme="dark" size="small" isLoading>
                    Uber
                </Button>
                <Button scheme="dark" size="regular" isLoading>
                    Uber
                </Button>
                <Button scheme="dark" size="large" isLoading>
                    Uber
                </Button>
                <Button scheme="light" size="small" isLoading>
                    Uber
                </Button>
                <Button scheme="light" size="regular" isLoading>
                    Uber
                </Button>
                <Button scheme="light" size="large" isLoading>
                    Uber
                </Button>
            </div>
        </>
    );
};
