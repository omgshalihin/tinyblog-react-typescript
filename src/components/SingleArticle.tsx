import React, { FC } from "react";
import styles from "./singleArticle.module.css";
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

interface iProps {
  article: iArticle;
}

const SingleArticle: FC<iProps> = ({ article }) => {
  return (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={styles.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={styles.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  );
};

export default SingleArticle;
