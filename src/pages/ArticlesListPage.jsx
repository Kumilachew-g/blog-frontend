import React from "react";
import articles from "./ArticleContent";
import ArticlesList from "../components/ArticlesList";

const ArticlesListPage = () => (
  <>
    <h1>Articles</h1>
    <ArticlesList articles={articles} />
  </>
);

export default ArticlesListPage;
