import { ComponentPropsWithoutRef, FC, PropsWithChildren, useState } from 'react';
import { Field, Input, Label } from '@headlessui/react';
import WrongIcon from '../../../../assets/icons/wrong.svg?react';
import CorrectIcon from '../../../../assets/icons/correct.svg?react';
import styles from './Text-field.module.scss';
import clsx from 'clsx';

type TextFieldProps = {
    hasHintCheck?: boolean;
    isCorrectDefault?: boolean;
    label: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'input'>>;

export const TextField: FC<TextFieldProps> = (props) => {
    const { hasHintCheck, isCorrectDefault, label, ...restProps } = props;
    const [isCorrect] = useState<boolean | null>(
        isCorrectDefault === true && isCorrectDefault !== null && isCorrectDefault !== undefined
            ? true
            : false
    );
    const innerContent = (
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
                className={clsx(styles.input, isCorrect === false ? styles.wrong : styles.correct)}
            />
            {innerContent}
        </Field>
    );
};
