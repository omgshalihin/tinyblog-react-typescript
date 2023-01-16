import React, { FC } from "react";
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
}

const SingleArticle: FC<iProps> = ({ article }) => {
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
        <Image src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" />
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
