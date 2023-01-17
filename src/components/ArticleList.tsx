import React, { FC, useState } from "react";
import styles from "./articleList.module.css";
import { SimpleGrid, Container } from "@mantine/core";
import { iArticle } from "../iArticle";
import SingleArticle from "./SingleArticle";

interface iProps {
  articles: iArticle[];
  header: string;
}

const ArticleList: FC<iProps> = ({ articles, header }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const section = document.getElementById(`toggle ${header}`);
    console.log("click");
    if (!isVisible) {
      section?.style.setProperty("display", "none");
    } else {
      section?.style.setProperty("display", "");
    }
    setIsVisible(!isVisible);
  };
  return (
    <Container py="xl">
      <h2 className={styles.header}>
        {header.toUpperCase()}{" "}
        <button onClick={toggleVisibility}>toggle {header}</button>
      </h2>

      <SimpleGrid
        id={`toggle ${header}`}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        {articles.map((article) => (
          <SingleArticle
            key={article.title}
            article={article}
            header={header}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ArticleList;
