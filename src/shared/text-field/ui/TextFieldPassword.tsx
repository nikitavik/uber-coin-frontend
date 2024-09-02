import mergeRefs from 'merge-refs';
import { forwardRef, InputHTMLAttributes, useRef, useState } from 'react';

import EyeCloseIcon from '../assets/icons/eye_close.svg?react';
import EyeIcon from '../assets/icons/eye_open.svg?react';
import { TextField, type TextFieldProps } from './TextField';
import styles from './TextField.module.scss';

type TextFieldPasswordProps = TextFieldProps & InputHTMLAttributes<HTMLInputElement>;

type TextFieldPasswordType = 'password' | 'text';

export const TextFieldPassword = forwardRef<HTMLInputElement, TextFieldPasswordProps>(
    (props, ref) => {
        const [showPassword, setShowPassword] = useState<boolean>(false);
        const [type, setType] = useState<TextFieldPasswordType>('password');

        const localRef = useRef<HTMLInputElement | null>(null);

        const handleShowPasswordButton = () => {
            if (showPassword) {
                setType('password');
                setShowPassword(false);
            } else {
                setType('text');
                setShowPassword(true);
            }

            localRef.current?.focus();
        };

        return (
            <TextField
                type={type}
                actionButtons={
                    <button
                        type="button"
                        onClick={handleShowPasswordButton}
                        className={styles.showButton}
                    >
                        {showPassword ? (
                            <EyeCloseIcon className={styles.showIcon} />
                        ) : (
                            <EyeIcon className={styles.showIcon} />
                        )}
                    </button>
                }
                ref={mergeRefs(localRef, ref)}
                {...props}
            />
        );
    }
);
