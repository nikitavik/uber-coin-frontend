import { FC, PropsWithChildren, ComponentPropsWithoutRef, ReactNode } from 'react';

import styles from './Account.module.scss';

type AccountProps = {
    children: ReactNode;
    accountName: string;
    deposit: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const Account: FC<AccountProps> = (props) => {
    const { children, accountName, deposit, ...restProps } = props;

    const innerContent = (
        <>
            <span className={styles.accountName}>{accountName}</span>
            <span className={styles.iconWrapper}>{children}</span>
            <span className={styles.deposit}>{deposit}</span>
        </>
    );

    return (
        <div className={styles.account} {...restProps}>
            {innerContent}
        </div>
    );
};
