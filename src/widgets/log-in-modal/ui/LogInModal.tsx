import { FC, useState } from 'react';
import { Modal } from '@shared/modal';
import { TextField } from '@shared/text-field';
import { Button } from '@shared/button';
import { Fieldset } from '@shared/fieldset';
import { TextFieldPassword } from '@shared/text-field-password';

export const LogInModal: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleOpen = () => setIsOpen((prevOpen) => !prevOpen);

    return (
        <Modal open={isOpen} onClose={toggleOpen}>
            {
                <Fieldset>
                    <h1>Log in</h1>
                    <TextField label="Email address" placeholder="Email" />
                    <TextFieldPassword label="Password" placeholder="Password" />
                    <Button onClick={toggleOpen}>Log in</Button>
                </Fieldset>
            }
        </Modal>
    );
};
