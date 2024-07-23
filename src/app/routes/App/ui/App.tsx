import React, { FC } from 'react';
import { Button } from '../../../../shared/button/ui/button';
import styles from './App.module.scss';
import '../../../global.scss';
export const App: FC = () => {
    return (
        <>
            <div className={styles.root}>App</div>
            <div className={styles.container}>
                <Button text={'Uber'} scheme="light" variant="small" />
                <Button text={'Uber'} scheme="light" variant="regular" />
                <Button text={'Uber'} scheme="light" variant="large" />
                <Button text={'Uber'} scheme="dark" variant="small" />
                <Button text={'Uber'} scheme="dark" variant="regular" />
                <Button text={'Uber'} scheme="dark" variant="small" isLoad />
                <Button text={'Uber'} scheme="dark" variant="regular" isLoad />
                <Button
                    text={'Uber'}
                    onClick={() => alert('Click')}
                    scheme="dark"
                    variant="large"
                    isLoad
                />
                <Button text={'Uber'} scheme="light" variant="small" isLoad />
                <Button text={'Uber'} scheme="light" variant="regular" isLoad />
                <Button text={'Uber'} scheme="light" variant="large" isLoad />
            </div>
        </>
    );
};
