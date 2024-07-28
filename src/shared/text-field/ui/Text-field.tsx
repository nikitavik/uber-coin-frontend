import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import { Description, Field, Input, Label } from '@headlessui/react';

type TextFieldProps = {
    label: string;
    description: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'input'>>;

export const TextField: FC<TextFieldProps> = (props) => {
    const { label, description, ...restProps } = props;
    return (
        <Field>
            <Label>{label}</Label>
            <Description>{description}</Description>
            <Input {...restProps} />
        </Field>
    );
};
