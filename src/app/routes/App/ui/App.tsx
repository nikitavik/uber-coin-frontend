import React, { FC } from 'react';
import { Button } from '../../../../shared/button/ui/button';
import styles from './App.module.scss';
import '../../../global.scss';
export const App: FC = () => {
    return (
        <>
            <div className={styles.root}>App</div>
            <Button text={'Uber'} onClick={() => alert('Click')} />
        </>
    );
};
