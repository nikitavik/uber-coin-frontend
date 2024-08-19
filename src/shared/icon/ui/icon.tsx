import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react';

type IconProps = {
    children: ReactNode;
} & ComponentPropsWithoutRef<PropsWithChildren<'svg'>>;

export const Icon: FC<IconProps> = (props) => {
    const { children } = props;

    return <>{children}</>;
};
