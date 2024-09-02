import { FC, PropsWithChildren } from 'react';

import clsx from 'clsx';

import styles from './Container.module.scss';

type ContainerComponent = 'div' | 'article' | 'section' | 'header';
type ContainerSize = 'default' | 'expanded';

const sizeClassNameBySize: Record<ContainerSize, string> = {
    default: '',
    expanded: styles.isExpandedSize,
};

type ContainerProps = PropsWithChildren<{
    classes?: Classes<'root' | 'inner'>;
    size?: ContainerSize;
    outerComponent?: ContainerComponent;
    innerComponent?: ContainerComponent;
}>;

export const Container: FC<ContainerProps> = (props) => {
    const {
        children,
        classes,
        size = 'default',
        outerComponent: OuterComponent = 'div',
        innerComponent: InnerComponent = 'div',
    } = props;

    return (
        <OuterComponent className={clsx(styles.root, sizeClassNameBySize[size], classes?.root)}>
            <InnerComponent className={clsx(styles.inner, classes?.inner)}>
                {children}
            </InnerComponent>
        </OuterComponent>
    );
};
