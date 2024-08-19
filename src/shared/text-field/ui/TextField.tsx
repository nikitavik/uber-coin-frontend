import { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react';

import clsx from 'clsx';

import { Field, Input, Label } from '@headlessui/react';
import CancelIcon from '@shared/text-field/assets/icons/cancel.svg?react';
import CorrectIcon from '@shared/text-field/assets/icons/correct.svg?react';
import WrongIcon from '@shared/text-field/assets/icons/wrong.svg?react';

import styles from './TextField.module.scss';

export type TextFieldProps = {
    hasHintCheck?: boolean;
    hintText?: string;
    isCorrect?: boolean;
    label: string;
    actionButtons?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const {
        hasHintCheck = false,
        isCorrect,
        label,
        actionButtons,
        hintText = '',
        className,
        ...restProps
    } = props;
    const [value, setValue] = useState<string>('');

    const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setValue(target.value);
    };

    const handleCancelButton = () => {
        setValue('');
    };

    const hasValue = value !== '';

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
                    ref={ref}
                    onChange={handleValue}
                    value={value}
                    className={clsx(
                        styles.input,
                        isCorrect === false && styles.wrong,
                        isCorrect === true && styles.correct,
                        className
                    )}
                    {...restProps}
                />

                <div className={styles.actions}>
                    <button
                        onClick={handleCancelButton}
                        type={'button'}
                        className={clsx(styles.cancelButton, hasValue && styles.isVisible)}
                    >
                        <CancelIcon className={styles.cancelIcon} />
                    </button>

                    {actionButtons}
                </div>
            </div>
            {hint}
        </Field>
    );
});
