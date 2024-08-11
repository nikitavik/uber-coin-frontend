import { FC } from 'react';
import IncomeSvg from '@entities/account/assets/icons/income/income.svg?react';

import styles from './Income.module.scss';

export const Income: FC = () => {
    return <IncomeSvg className={styles.icon} />;
};
