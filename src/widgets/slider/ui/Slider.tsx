import useEmblaCarousel from 'embla-carousel-react';
import { FC } from 'react';
import styles from './Slider.module.scss';

export const Slider: FC = () => {
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className={styles.slider} ref={emblaRef}>
            <div className={styles.container}>
                <div className={styles.slide}>Slide 1</div>
                <div className={styles.slide}>Slide 2</div>
                <div className={styles.slide}>Slide 3</div>
            </div>
        </div>
    );
};
