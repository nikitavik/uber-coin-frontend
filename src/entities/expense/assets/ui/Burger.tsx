import { FC } from 'react';
import BurgerSvg from '@entities/expense/assets/burger.svg?react';

import styles from './Burger.module.scss';

export const BurgerIcon: FC = () => {
    return <BurgerSvg className={styles.icon} />;
};
