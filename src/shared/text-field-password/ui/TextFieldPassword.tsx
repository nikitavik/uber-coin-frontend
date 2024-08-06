import { forwardRef, useState, InputHTMLAttributes, ChangeEvent } from 'react';
import { Field, Input, Label } from '@headlessui/react';
import WrongIcon from '@shared/text-field-password/assets/icons/wrong.svg?react';
import EyeIcon from '@shared/text-field-password/assets/icons/eye_open.svg?react';
import EyeCloseIcon from '@shared/text-field-password/assets/icons/eye_close.svg?react';
import CorrectIcon from '@shared/text-field-password/assets/icons/correct.svg?react';
import CancelIcon from '@shared/text-field-password/assets/icons/cancel.svg?react';
import styles from '@shared/text-field/ui/TextField.module.scss';
import clsx from 'clsx';

type TextFieldPasswordProps = {
    hasHintCheck?: boolean;
    hintText?: string;
    isCorrect?: boolean;
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

type TextFieldPasswordType = 'password' | 'text';

export const TextFieldPassword = forwardRef<HTMLInputElement, TextFieldPasswordProps>(
    (props, ref) => {
        const { hasHintCheck = false, isCorrect, label, hintText = '', ...restProps } = props;
        const [value, setValue] = useState<string>('');
        const [showPassword, setShowPassword] = useState<boolean>(false);
        const [type, setType] = useState<TextFieldPasswordType>('password');

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
            } else {
                setType('text');
                setShowPassword(true);
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
                        type={type}
                        {...restProps}
                        className={clsx(
                            styles.input,
                            isCorrect === false && styles.wrong,
                            isCorrect === true && styles.correct
                        )}
                        ref={ref}
                    />
                    {value !== '' && (
                        <button type="button" onClick={handleCancelButton}>
                            <CancelIcon
                                className={clsx(styles.cancelIcon, styles.cancelIconPassword)}
                            />
                        </button>
                    )}
                    {showPassword ? (
                        <button type="button" onClick={handleShowPasswordButton}>
                            <EyeCloseIcon className={styles.showIcon} />
                        </button>
                    ) : (
                        <button type="button" onClick={handleShowPasswordButton}>
                            <EyeIcon className={styles.showIcon} />
                        </button>
                    )}
                </div>
                {hint}
            </Field>
        );
    }
);
