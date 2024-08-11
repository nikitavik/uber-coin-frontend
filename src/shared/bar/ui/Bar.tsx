import { FC, useState, useRef, FocusEvent, PropsWithChildren, ReactNode } from 'react';
import { TabGroup, TabList, TabPanels } from '@headlessui/react';

import styles from './Bar.module.scss';

type BarProps = { tabs: ReactNode; tabPanels: ReactNode } & PropsWithChildren;

export const Bar: FC<BarProps> = (props) => {
    const { tabs, tabPanels } = props;

    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [isOpen, setOpen] = useState<boolean>(false);
    const localRef = useRef<HTMLDivElement>(null);

    const handleOpen = () => setOpen(true);
    const handleClose = (event: FocusEvent<HTMLDivElement>) => {
        if (localRef.current && !localRef.current.contains(event.relatedTarget as Node)) {
            setOpen(false);
        }
    };

    return (
        <TabGroup
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
            onFocus={handleOpen}
            onBlur={handleClose}
            ref={localRef}
        >
            <TabList className={styles.wrapper} ref={localRef}>
                {tabs}
                {isOpen && <TabPanels className={styles.tabPanels}>{tabPanels}</TabPanels>}
            </TabList>
        </TabGroup>
    );
};
