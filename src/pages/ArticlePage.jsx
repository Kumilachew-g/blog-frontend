import React from "react";
import { useParams } from "react-router-dom";
import articles from "./ArticleContent";

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);

  if (!article) return <h1>Article does not exist!</h1>;

  const otherArticles = articles.filter((article) => article.name !== name);
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
