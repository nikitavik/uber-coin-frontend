import { FC } from 'react';
import CreditCardSvg from '@entities/account/assets/icons/credit-card/credit_card.svg?react';

import styles from './CreditCard.module.scss';

export const CreditCard: FC = () => {
    return <CreditCardSvg className={styles.icon} />;
};
