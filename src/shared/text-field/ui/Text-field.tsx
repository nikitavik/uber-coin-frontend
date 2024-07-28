import { ComponentPropsWithoutRef, FC, PropsWithChildren, useState } from 'react';
import { Field, Input, Label } from '@headlessui/react';
import ReactComponent from '../../../../assets/icons/wrong.svg';
import styles from './Text-field.module.scss';
import clsx from 'clsx';

type TextFieldProps = {
    hasHint?: boolean;
    label: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'input'>>;

export const TextField: FC<TextFieldProps> = (props) => {
    const { hasHint, label, ...restProps } = props;
    const [isCorrect] = useState<boolean>(false);
    const innerContent = (
        <>
            {hasHint === true && (
                <div className={styles.hint}>
                    {isCorrect ? (
                        <>
                            <div>dvdd</div>
                        </>
                    ) : (
                        <>
                            <div>dvdd</div>
                        </>
                    )}
                </div>
            )}
        </>
    );

    return (
        <Field className={styles.textField}>
            <Label>{label}</Label>
            <Input {...restProps} className={clsx(styles.input)} />
            {innerContent}
        </Field>
    );
};
