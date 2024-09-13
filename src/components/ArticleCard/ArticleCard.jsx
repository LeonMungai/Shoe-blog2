

export const ArticleCard = () => {
  return (
    <div className="w-60 bg-fuchsia-200 rounded-2xl shadow-lg shadow-gray-500 flex flex-col m-3 h-fit text-black">
      <img
        src="https://images.unsplash.com/photo-1698609467326-fab7045d773c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
        alt="ArticleCard Image"
        className="m-10 w-40 h-40 border-solid border-x-2  lg:rounded-full md:rounded-lg sm:border-2 sm:border-red-500 rounded-2xl"
      />
      <h1 className="text-sm text-center from-neutral-800 font-medium">AIRFORCE 1</h1>
      <p className="m-3  from-neutral-800 font-light text-base">
        This footwear is stylish and offers Comfort
      </p>
      <a href="" className="h-8 rounded-lg m-3  flex justify-center text-lg bg-primary text-zinc-200 bg-zinc-500">
        View More
      </a>
    </div>
  );
};

export default ArticleCard;
