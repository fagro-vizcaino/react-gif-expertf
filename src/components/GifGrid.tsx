import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export function GifGrid({ category }: Props) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 my-5">
        <h3 className="text-2xl text-gray-800 ">{category}</h3>
        {isLoading && <h2>Cargando...</h2>}

        <div className="grid grid-cols-3 gap-4">
          {images.map((it) => (
            <GifItem key={it.id} {...it} />
          ))}
        </div>
      </div>
    </>
  );
}

interface Props {
  category: string;
}
