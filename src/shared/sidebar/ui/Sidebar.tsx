import {
    ComponentPropsWithoutRef,
    FC,
    PropsWithChildren,
    ReactNode,
    useState,
    useRef,
} from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import MenuIcon from '../assets/menu.svg?react';
import MenuOpenIcon from '../assets/menu_open.svg?react';
import clsx from 'clsx';

import styles from './Sidebar.module.scss';

type SidebarProps = {
    children?: ReactNode;
    className?: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const Sidebar: FC<SidebarProps> = (props) => {
    const { children, className, ...restProps } = props;

    const [isOpen, setOpen] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleOpen = () => setOpen(true);
    const handleBlur = () => {
        setTimeout((event: MouseEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(document.activeElement)) {
                setOpen(false);
            }
        }, 0);
    };
    return (
        <div className={clsx(styles.sidebar, className)} onBlur={handleBlur} {...restProps}>
            <Popover>
                <PopoverButton
                    ref={buttonRef}
                    onClick={() => setOpen(!isOpen)}
                    className={styles.button}
                >
                    {isOpen ? (
                        <MenuIcon className={styles.icon} />
                    ) : (
                        <MenuOpenIcon className={styles.icon} />
                    )}
                </PopoverButton>
                <PopoverPanel anchor="left" className={styles.menuItems} onClick={handleOpen}>
                    Some item
                </PopoverPanel>
            </Popover>
            {children}
        </div>
    );
};
