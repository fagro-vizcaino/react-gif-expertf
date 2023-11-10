import { useEffect, useState } from 'react';
import { GifImage, getGifs } from '../components/helper/getGifs';

export function useFetchGifs(category: string) {
  const [images, setImages] = useState([] as GifImage[]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async (category: string) => {
    const gifImages = await getGifs(category);
    setImages(images.concat(gifImages));
    setIsLoading(false);
  };
  useEffect(() => {
    getImages(category);
  }, []);

  return {
    images,
    isLoading,
  };
}
