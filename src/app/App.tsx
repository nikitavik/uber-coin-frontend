import { FC, useRef } from 'react';

import { Button } from '@shared/button';
import { TextField, TextFieldPassword } from '@shared/text-field';
import { AuthModal } from '@widgets/auth-modal';

import './styles/global.scss';

import styles from './App.module.scss';

export const App: FC = () => {
    const ref = useRef<HTMLInputElement>(null);

    function handleFocus() {
        ref.current!.focus();
    }

    return (
        <>
            <div className={styles.root}>App</div>
            <div className={styles.container}>
                <form>
                    <TextField label="label" placeholder="Placeholder" ref={ref} />
                    <Button onClick={handleFocus}>Uber</Button>
                </form>
                <Button onClick={() => alert('rrr')}>Uber</Button>
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
                <TextField label="lebel" placeholder="Placeholder" />
                <TextField
                    label="label"
                    placeholder="Placeholder"
                    hasHintCheck
                    isCorrect
                    value="Correct"
                />
                <TextField
                    label="label"
                    placeholder="Placeholder"
                    isCorrect={false}
                    value="Wrong"
                    hasHintCheck
                />
                <TextField label="Label" hintText="Different hint" />
                <TextFieldPassword label="Password" />
                <AuthModal />
            </div>
        </>
    );
};
