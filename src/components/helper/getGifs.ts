export const getGifs = async (category: string): Promise<GifImage[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=hmTw3L5AJLMjWB7uFldtWePkPSeyaBjx&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = (): GifImage[] =>
    data.map((img: GifImages) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
  return gifs();
};

export type GifImages = {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
};

export type GifImage = {
  id: string;
  title: string;
  url: string;
};
