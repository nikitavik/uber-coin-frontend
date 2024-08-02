import { FC } from 'react';
import { Modal } from '@shared/modal';
import { TextField } from '@shared/text-field';
import { Button } from '@shared/button';
// import styles from './LogInModal.module.scss';
// import clsx from 'clsx';

export const LogInModal: FC = () => {
    return (
        <Modal>
            {
                <>
                    <h1>Log in</h1>
                    <TextField label={'Email address'} placeholder={'Email'} />
                    <TextField label={'Password'} placeholder={'Password'} type={'password'} />
                    <Button>Log in</Button>
                </>
            }
        </Modal>
    );
};
