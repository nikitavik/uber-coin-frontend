import { forwardRef, useState, InputHTMLAttributes } from 'react';
import { Field, Input, Label } from '@headlessui/react';
import WrongIcon from '../../../../assets/icons/wrong.svg?react';
import CorrectIcon from '../../../../assets/icons/correct.svg?react';
import styles from './Text-field.module.scss';
import clsx from 'clsx';

type TextFieldProps = {
    hasHintCheck?: boolean;
    isCorrectDefault?: boolean;
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const { hasHintCheck, isCorrectDefault, label, ...restProps } = props;
    const [isCorrect] = useState<boolean | null>(
        isCorrectDefault !== null && isCorrectDefault !== undefined ? isCorrectDefault : null
    );
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
            <Input
                {...restProps}
                className={clsx(
                    styles.input,
                    isCorrect === false && styles.wrong,
                    isCorrect === true && styles.correct
                )}
                ref={ref}
            />
            {hint}
        </Field>
    );
});
