import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react';
import styles from './RootPage.module.scss';

type RootPageLayoutProps = {
    children?: ReactNode;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const RootPageLayout: FC<RootPageLayoutProps> = (props) => {
    const { children, ...restProps } = props;

    return <div {...restProps} className={styles.layout}></div>;
};
