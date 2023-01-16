import React, { FC } from "react";
import styles from "./articleList.module.css";
import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
import { iArticle } from "../iArticle";
import SingleArticle from "./SingleArticle";

interface iProps {
  mockdata: iArticle[];
}

const ArticleList: FC<iProps> = ({ mockdata }) => {
  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {mockdata.map((article) => (
          <SingleArticle key={article.title} article={article} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ArticleList;
