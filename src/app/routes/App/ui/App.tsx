import { FC } from 'react';
import styles from './App.module.scss';
import { Button } from '@shared/button';

export const App: FC = () => {
    return (
        <>
            <div className={styles.root}>App</div>;
            <Button />
        </>
    );
};
