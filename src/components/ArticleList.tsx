import React, { FC } from "react";
import styles from "./articleList.module.css";
import { SimpleGrid, Container } from "@mantine/core";
import { iArticle } from "../iArticle";
import SingleArticle from "./SingleArticle";

interface iProps {
  articles: iArticle[];
  header: string;
}

const ArticleList: FC<iProps> = ({ articles, header }) => {
  return (
    <Container py="xl">
      <h2 className={styles.header}>{header.toUpperCase()}</h2>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
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
