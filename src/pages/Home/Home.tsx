import { ArticleData } from "@/data/articlesTypes";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import mockData from "../../data/articles.json";

export const Home = () => {
  const data = JSON.parse(JSON.stringify(mockData)) as ArticleData;

  return (
    <div className="bg-slate-100 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 w-full mt-4">
      {data.map((data, index) => (
        <ArticleCard key={index} data={data} />
      ))}
    </div>
  );
};

export default Home;
