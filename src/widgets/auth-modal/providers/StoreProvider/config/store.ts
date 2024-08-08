import { create } from 'zustand';

type ModalState = {
    isOpen: boolean;
    setIsOpen: () => void;
};

export const useModalStore = create<ModalState>()((set) => ({
    isOpen: false,
    setIsOpen: () =>
        set((state) => ({
            isOpen: !state.isOpen,
        })),
}));
