import React from "react";
import { useParams } from "react-router-dom";
import articles from "./ArticleContent";
import ArticlesList from "../components/ArticlesList";

const ArticlePage = () => {
  const { name } = useParams();
  const matchingArticle = articles.find((article) => article.name === name);

  if (!matchingArticle) return <h1>Article does not exist!</h1>;

  const otherArticles = articles.filter((article) => article.name !== name);
  return (
    <>
      <h1>{matchingArticle.title}</h1>
      {matchingArticle.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}

      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
