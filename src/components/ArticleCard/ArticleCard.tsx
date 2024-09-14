import { APP_ROUTES } from "../../constants";
import { ArticleData } from "@/data/articlesTypes";
import { NavLink } from "react-router-dom";

type ArticleCardProps = {
  data: ArticleData[0];
};

export const ArticleCard = (props: ArticleCardProps) => {
  const { data } = props;

  return (
    <div className="w-60 bg-fuchsia-200 rounded-2xl shadow-lg shadow-gray-500 flex flex-col m-3 h-fit text-black">
      <img
        src={data.image}
        alt="ArticleCard Image"
        className="m-10 w-40 h-40 border-solid border-x-2  lg:rounded-full md:rounded-lg sm:border-2 sm:border-red-500 rounded-2xl"
      />
      <h1 className="text-sm text-center from-neutral-800 font-medium">
        {data.title}
      </h1>
      <p className="m-3  from-neutral-800 font-light text-base">
        {data.content}
      </p>
      <NavLink
        to={APP_ROUTES.ARTICLE(data.slug)}
        className="h-8 rounded-lg m-3  flex justify-center text-lg bg-primary text-zinc-200 bg-zinc-500"
      >
        View More
      </NavLink>
    </div>
  );
};

export default ArticleCard;
