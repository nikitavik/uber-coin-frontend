import type { FC } from 'react';

import styles from './Spinner.module.scss';

type SpinnerProps = {
    size?: number;
};
export const Spinner: FC<SpinnerProps> = (props) => {
    const { size = 24 } = props;

    return (
        <div className={styles.root}>
            <svg
                width={size}
                height={size}
                className={styles.svg}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle className={styles.circle} cx="50" cy="50" r="45" />
            </svg>
        </div>
    );
};
