import { create } from 'zustand';

type State = {
    exampleField: string;
    otherField: number;
};

type Action = {
    updateField: (newField: State['exampleField']) => void;
};

const initialState: State = {
    exampleField: '',
    otherField: 1,
};

export const useExampleStore = create<State & Action>(
    (
        set // setStateFn
        // get, // getStoreFn
        // store // Returns store
    ) => ({
        ...initialState,
        updateField: (newField) =>
            set(
                (
                    state // Have to spread the state
                ) => ({ ...state, exampleField: newField })
                //To disable the merging behavior, you can specify a replace boolean value for set like so
                // true
            ), // set function
        reset: () => set(initialState),
    })
);
// TODO: После прочтения удалить
