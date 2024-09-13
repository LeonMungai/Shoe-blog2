import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ArticleDetail from "../components/ArticleDetail/ArticleDetail";
import Layout from "../components/Layout/Layout";
import { APP_ROUTES } from "../constants";
import ContactUs from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: APP_ROUTES.HOME,
        element: <Home />,
      },
      {
        path: APP_ROUTES.ARTICLE(":slug"),
        element: <ArticleDetail />,
      },
      {
        path: APP_ROUTES.CONTACT,
        element: <ContactUs />,
      },
    ],
  },
]);
