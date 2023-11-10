import {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react';

export const AddCategory = ({ onAddCategory }: Props) => {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const isEmptyOrOneLetter = inputValue.trim().length <= 1;
    if (isEmptyOrOneLetter) return;

    onAddCategory(inputValue);
    setInputValue('');
  }

  function handleOnChange({ target }: ChangeEvent<HTMLInputElement>): void {
    setInputValue(target.value);
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        type="text"
        placeholder="Place holdeer"
        value={inputValue}
        onChange={(event) => handleOnChange(event)}
      />
    </form>
  );
};

interface Props {
  onAddCategory: (category: string) => void;
}
