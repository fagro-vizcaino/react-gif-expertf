import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export function GifExpertApp() {
  const [categories, setCategories] = useState([] as string[]);

  const handleAddCategory = (category: string) => {
    if (categories.includes(category)) return;
    setCategories(categories.concat(category));
  };

  return (
    <>
      <div className="mx-10">
        <h1 className="text-3xl font-bold underline my-10">GifExpertApp</h1>
        <AddCategory onAddCategory={handleAddCategory} />
        <button className="my-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          Agregar
        </button>
        {categories.map((it) => (
          <GifGrid key={it} category={it} />
        ))}
      </div>
    </>
  );
}
