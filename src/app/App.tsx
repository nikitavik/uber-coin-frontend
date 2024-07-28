import { FC } from 'react';

import './styles/global.scss';

import styles from './App.module.scss';
import { Button } from '@shared/button';
import { TextField } from '@shared/text-field';

export const App: FC = () => {
    return (
        <>
            <div className={styles.root}>App</div>
            <div className={styles.container}>
                <Button>Uber</Button>
                <Button scheme="light">Uber</Button>
                <Button disabled isFullWidth>
                    Uber
                </Button>
                <Button isLoading>Uber</Button>
                <Button scheme="light" isLoading>
                    Uber
                </Button>
                <Button isLoading isFullWidth>
                    Uber
                </Button>
                <TextField
                    label={'lebel'}
                    description={'description bfbf'}
                    placeholder={'Placeholder'}
                />
            </div>
        </>
    );
};
