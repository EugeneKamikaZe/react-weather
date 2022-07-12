import create from 'zustand';

interface InputProps {
    inputText: string;
    setInputText: (text: string) => void;
}

export const useInputText = create<InputProps>((set) => ({
    inputText: '',
    setInputText: (text) =>
        set({
            inputText: text,
        }),
}));
