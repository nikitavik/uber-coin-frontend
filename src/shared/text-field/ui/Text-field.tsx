import { forwardRef, useState, InputHTMLAttributes, ChangeEvent } from 'react';
import { Field, Input, Label } from '@headlessui/react';
import WrongIcon from '../../../../assets/icons/wrong.svg?react';
import CorrectIcon from '../../../../assets/icons/correct.svg?react';
import CancelIcon from '../../../../assets/icons/cancel.svg?react';
import styles from './Text-field.module.scss';
import clsx from 'clsx';

type TextFieldProps = {
    hasHintCheck?: boolean;
    isCorrectDefault?: boolean;
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const { hasHintCheck, isCorrectDefault, label, ...restProps } = props;
    const [value, setValue] = useState<string | undefined>('');
    const [isCorrect] = useState<boolean | null>(
        isCorrectDefault !== null && isCorrectDefault !== undefined ? isCorrectDefault : null
    );

    const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setValue(target.value);
    };

    const hint = (
        <>
            {hasHintCheck === true ? (
                <div className={styles.hint}>
                    {isCorrect === true && (
                        <>
                            <CorrectIcon />
                            <span className={styles.hintCorrect}>Hint</span>
                        </>
                    )}
                    {isCorrect === false && (
                        <>
                            <WrongIcon />
                            <span className={styles.hintWrong}>Hint</span>
                        </>
                    )}

                    {isCorrect === null && <span>Hint</span>}
                </div>
            ) : (
                <div className={styles.hint}>Hint</div>
            )}
        </>
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
                {value !== '' && <CancelIcon className={styles.cancelIcon} />}
            </div>
            {hint}
        </Field>
    );
});
