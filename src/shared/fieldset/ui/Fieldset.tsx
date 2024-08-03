import { FC } from 'react';
import { Fieldset as FieldsetHeadless, FieldsetProps } from '@headlessui/react';
import clsx from 'clsx';
import styles from './Fieldset.module.scss';

export const Fieldset: FC<FieldsetProps> = (props) => {
    const { children, ...restProps } = props;

    return (
        <FieldsetHeadless className={clsx(styles.fieldset)} {...restProps}>
            {children}
        </FieldsetHeadless>
    );
};
