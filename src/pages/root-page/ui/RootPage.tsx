import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react';

import styles from './RootPage.module.scss';

type RootPageProps = {
    children: ReactNode;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const RootPage: FC<RootPageProps> = (props) => {
    const { children, ...restProps } = props;

    return (
        <div {...restProps} className={styles.app}>
            {children}
        </div>
    );
};
