import { FC, PropsWithChildren, ReactNode, useState } from 'react';

import { TabGroup, TabList } from '@headlessui/react';

import styles from './Bar.module.scss';

type BarProps = { tabs?: ReactNode; tabPanels?: ReactNode } & PropsWithChildren;

export const Bar: FC<BarProps> = (props) => {
    const { tabs } = props;

    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    return (
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <TabList className={styles.wrapper}>{tabs}</TabList>
        </TabGroup>
    );
};
