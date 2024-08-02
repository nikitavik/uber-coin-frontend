import { forwardRef, useState, InputHTMLAttributes, ChangeEvent } from 'react';
import { Field, Input, Label } from '@headlessui/react';
import WrongIcon from '../assets/icons/wrong.svg?react';
import CorrectIcon from '../assets/icons/correct.svg?react';
import CancelIcon from '../assets/icons/cancel.svg?react';
import styles from './TextField.module.scss';
import clsx from 'clsx';

type TextFieldProps = {
    hasHintCheck?: boolean;
    hintText?: string;
    isCorrect?: boolean;
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const { hasHintCheck = false, isCorrect, label, hintText = '', ...restProps } = props;
    const [value, setValue] = useState<string>('');

    const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setValue(target.value);
    };

    const handleCancelButton = () => {
        setValue('');
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
                    {...restProps}
                    className={clsx(
                        styles.input,
                        isCorrect === false && styles.wrong,
                        isCorrect === true && styles.correct
                    )}
                    ref={ref}
                />
                {value !== '' && (
                    <CancelIcon className={styles.cancelIcon} onClick={handleCancelButton} />
                )}
            </div>
            {hint}
        </Field>
    );
});
