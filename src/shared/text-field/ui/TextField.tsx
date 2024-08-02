import { forwardRef, useState, InputHTMLAttributes, ChangeEvent, useRef } from 'react';
import { Field, Input, Label } from '@headlessui/react';
import WrongIcon from '../assets/icons/wrong.svg?react';
import EyeIcon from '../assets/icons/eye_open.svg?react';
import EyeCloseIcon from '../assets/icons/eye_close.svg?react';
import CorrectIcon from '../assets/icons/correct.svg?react';
import CancelIcon from '../assets/icons/cancel.svg?react';
import styles from './TextField.module.scss';
import clsx from 'clsx';

type TextFieldProps = {
    isPassword?: boolean;
    hasHintCheck?: boolean;
    hintText?: string;
    isCorrect?: boolean;
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

type TextFieldPassword = 'password' | 'text';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const {
        hasHintCheck = false,
        isPassword,
        isCorrect,
        label,
        hintText = '',
        ...restProps
    } = props;
    const [value, setValue] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [type, setType] = useState<TextFieldPassword>('password');
    const refer = useRef<HTMLInputElement>(null);

    function handleFocus() {
        refer.current!.focus();
    }

    const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setValue(target.value);
    };

    const handleCancelButton = () => {
        setValue('');
    };

    const handleShowPasswordButton = () => {
        if (showPassword) {
            setType('password');
            setShowPassword(false);
            handleFocus();
        } else {
            setType('text');
            setShowPassword(true);
            handleFocus();
        }
    };

    const hint = (
        <div className={styles.hint}>
            {isCorrect !== undefined && hasHintCheck && (
                <>{isCorrect ? <CorrectIcon /> : <WrongIcon />}</>
            )}
            <span
                className={clsx(
                    styles.hintText,
                    isCorrect !== undefined
                        ? isCorrect
                            ? styles.isCorrect
                            : styles.isWrong
                        : undefined
                )}
            >
                {hintText}
            </span>
        </div>
    );

    return (
        <Field className={styles.textField}>
            <Label className={styles.label}>{label}</Label>
            <div className={styles.wrapper}>
                <Input
                    onChange={handleValue}
                    value={value}
                    type={isPassword === true ? type : 'text'}
                    {...restProps}
                    className={clsx(
                        styles.input,
                        isCorrect === false && styles.wrong,
                        isCorrect === true && styles.correct
                    )}
                    ref={isPassword === true ? refer : ref}
                />
                {value !== '' && (
                    <CancelIcon className={styles.cancelIcon} onClick={handleCancelButton} />
                )}
                {isPassword === true ? (
                    showPassword ? (
                        <EyeCloseIcon
                            onClick={handleShowPasswordButton}
                            className={styles.showIcon}
                        />
                    ) : (
                        <EyeIcon onClick={handleShowPasswordButton} className={styles.showIcon} />
                    )
                ) : undefined}
            </div>
            {hint}
        </Field>
    );
});
