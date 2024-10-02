import { ComponentPropsWithoutRef, FC, PropsWithChildren, useMemo } from 'react';

import styles from './Expense.module.scss';

export type ExpenseProps = {
    expenseName?: string;
    consumption?: number;
    currency: 'usd' | 'rub' | 'eur';
    deposit?: number;
    className?: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

const currencies = { usd: '$', rub: '₽', eur: '€' }; ///Для наглядности;

const getFillPercentage = (consumption: number, deposit: number): number => {
    if (deposit <= 0) return 0;
    return Math.round((consumption / deposit) * 100);
};

export const Expense: FC<ExpenseProps> = (props) => {
    const {
        children,
        currency,
        consumption = 0,
        expenseName,
        deposit = 0,
        className = '',
        ...restProps
    } = props;
    const { iconFillPercentage, fillColor } = useMemo(() => {
        const percentage = getFillPercentage(consumption, deposit);
        const color =
            percentage === 0
                ? 'transparent'
                : percentage < 100 && percentage < 50
                  ? 'var(--color-green)'
                  : percentage >= 50 && percentage < 100
                    ? 'var(--color-yellow)'
                    : 'var(--color-red)';
        return { iconFillPercentage: percentage, fillColor: color };
    }, [consumption, deposit]);

    const iconStyle = {
        background: `conic-gradient(${fillColor.slice(0, -1) + '-deep)'} 0deg ${iconFillPercentage * 3.6}deg, var(--color-light-grey) ${iconFillPercentage * 3.6}deg 360deg)`,
    };

    const fillStyle = {
        background: `linear-gradient(to top, ${fillColor} ${iconFillPercentage}%, var(--color-dark-grey) ${iconFillPercentage}%)`,
    };

    return (
        <div className={className} {...restProps}>
            <div className={styles.expense}>
                <span className={styles.expenseName}>{expenseName}</span>
                <div className={styles.icon} style={iconStyle}>
                    <div className={styles.fill} style={fillStyle} />
                    {children}
                </div>
                <span className={styles.consumption}>
                    {consumption} {currencies[currency]}
                </span>
                <span className={styles.deposit}>
                    {deposit} {currencies[currency]}
                </span>
            </div>
        </div>
    );
};
