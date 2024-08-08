import { FC } from 'react';

import { useModalStore } from '../providers/StoreProvider/config/store';

import { TextField, TextFieldPassword } from '@shared/text-field';
import { Fieldset } from '@shared/fieldset';
import { Modal } from '@shared/modal';
import { Button } from '@shared/button';

import styles from './AuthModal.module.scss';

export const AuthModal: FC = () => {
    const isOpen = useModalStore((state) => state.isOpen);
    const toggleOpen = useModalStore((state) => state.setIsOpen);

    return (
        <div className={styles.wrapper}>
            <Button onClick={toggleOpen}>Authorization</Button>

            <Modal open={isOpen} onClose={toggleOpen} className={styles.modal} transition>
                <Fieldset>
                    <h1>Log in</h1>

                    <TextField label="Email address" placeholder="Email" />
                    <TextFieldPassword label="Password" placeholder="Password" />

                    <div className={styles.buttonsWrapper}>
                        <Button onClick={toggleOpen} size="small">
                            Sign up
                        </Button>
                        <Button onClick={toggleOpen} size="small">
                            Log in
                        </Button>
                    </div>
                </Fieldset>
            </Modal>
        </div>
    );
};
