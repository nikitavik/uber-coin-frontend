import { FC } from 'react';

import './styles/global.scss';

import styles from './App.module.scss';
import { Button } from '@shared/button';

export const App: FC = () => {
    return (
        <>
            <div className={styles.root}>App</div>
            <div className={styles.container}>
                <Button scheme="light" variant="xsmall" />

                <Button scheme="light" variant="small" />

                <Button scheme="light" variant="regular">
                    Uber
                </Button>
                <Button scheme="light" variant="large">
                    Uber
                </Button>
                <Button scheme="dark" variant="xsmall">
                    Uber
                </Button>
                <Button scheme="dark" variant="small">
                    Uber
                </Button>
                <Button scheme="dark" variant="regular">
                    Uber
                </Button>
                <Button scheme="dark" variant="large">
                    Uber
                </Button>
                <Button scheme="dark" variant="small" isLoading>
                    Uber
                </Button>
                <Button scheme="dark" variant="regular" isLoading>
                    Uber
                </Button>
                <Button scheme="dark" variant="large" isLoading>
                    Uber
                </Button>
                <Button scheme="light" variant="small" isLoading>
                    Uber
                </Button>
                <Button scheme="light" variant="regular" isLoading>
                    Uber
                </Button>
                <Button scheme="light" variant="large" isLoading>
                    Uber
                </Button>
            </div>
        </>
    );
};
