import { FC, useState } from 'react';
import { Modal } from '@shared/modal';
import { TextField } from '@shared/text-field';
import { Button } from '@shared/button';
import { Fieldset } from '@shared/fieldset';
// import styles from './LogInModal.module.scss';
// import clsx from 'clsx';

export const LogInModal: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleOpen = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };
    return (
        <Modal open={isOpen} onClose={() => {}}>
            {
                <Fieldset>
                    <h1>Log in</h1>
                    <TextField label={'Email address'} placeholder={'Email'} />
                    <TextField label={'Password'} placeholder={'Password'} isPassword={true} />
                    <Button onClick={handleOpen}>Log in</Button>
                </Fieldset>
            }
        </Modal>
    );
};
