import { FC, useState } from 'react';
import { Modal } from '@shared/modal';
import { TextField } from '@shared/text-field';
import { Button } from '@shared/button';
import { Fieldset } from '@shared/fieldset';

export const SignUpModal: FC = () => {
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
                    <h1>Sign up</h1>
                    <TextField label="Email address" placeholder="Email" />
                    <TextField label="Password" placeholder="Password" />
                    <Button onClick={handleOpen}>Sign up</Button>
                </Fieldset>
            }
        </Modal>
    );
};
