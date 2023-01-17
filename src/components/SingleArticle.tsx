import React, { FC, useEffect, useState } from "react";
import styles from "./singleArticle.module.css";
import { IconHeart } from "@tabler/icons";
import {
  Card,
  Image,
  Text,
  AspectRatio,
  Badge,
  Group,
  ActionIcon,
} from "@mantine/core";
import { iArticle } from "../iArticle";

interface iProps {
  article: iArticle;
  header: string;
}

const SingleArticle: FC<iProps> = ({ article, header }) => {
  const [images, setImages] = useState<any[]>();
  const apiURL = `https://api.unsplash.com/search/photos/?client_id=${
    import.meta.env.VITE_APP_UNSPLASH_ACCESS_KEY
  }&page=1&query=${header}`;

  useEffect(() => {
    const getImage = async () => {
      const response = await fetch(apiURL);
      const newImage = await response.json();
      const result = newImage.results;
      setImages(result);
    };
    getImage();
  }, []);

  if (images === undefined) return <h1>Loading Dog Pictures...</h1>;

  return (
    <Card
      key={article.id}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={styles.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={images[Math.floor(Math.random() * 10)].urls.regular} />
      </AspectRatio>
      <Text
        className={styles.title}
        color="dimmed"
        size="md"
        transform="uppercase"
        weight={700}
        mt="md"
      >
        <p>{article.title}</p>
      </Text>
      <Text className={styles.body} mt={5}>
        {article.body}
      </Text>
      <Card.Section className={styles.footer}>
        {article.tags.map((tag, index) => (
          <Badge className={styles.badge} key={index}>
            {tag}
          </Badge>
        ))}
        <Group position="apart">
          <Group spacing={0}>
            <ActionIcon>
              <IconHeart size={18} stroke={1.5} />
            </ActionIcon>
            <Text size="xs" color="dimmed">
              {article.reactions} reacted to this post
            </Text>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default SingleArticle;
