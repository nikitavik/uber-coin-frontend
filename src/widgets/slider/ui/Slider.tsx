import useEmblaCarousel from 'embla-carousel-react';
import { FC } from 'react';

import { Card } from '@entities/card';

import styles from './Slider.module.scss';

export const Slider: FC = () => {
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className={styles.slider} ref={emblaRef}>
            <div className={styles.container}>
                <div className={styles.slide}>
                    <Card balance="25 975,30 $" outcome="25 975,30 $" income="25 975,30 $" />
                </div>
                <div className={styles.slide}>
                    <Card balance="30 975,30 $" outcome="25 975,30 $" income="25 975,30 $" />
                </div>
                <div className={styles.slide}>
                    <Card balance="50 975,30 $" outcome="25 975,30 $" income="25 975,30 $" />
                </div>
            </div>
        </div>
    );
};
