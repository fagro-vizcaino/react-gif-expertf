import { GifImage } from './helper/getGifs';

export function GifItem({ title, url }: GifImage) {
  return (
    <a
      className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition "
      href="#"
    >
      <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
        <img
          className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
          src={url}
          alt="Image Description"
        />
      </div>
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 ">{title}</h3>
      </div>
    </a>
  );
}
