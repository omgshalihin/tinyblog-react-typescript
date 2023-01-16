import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import styles from "./mainHeader.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HEADER_HEIGHT = 60;

export default function HeaderResponsive() {
  return (
    <Header height={HEADER_HEIGHT} mb={120}>
      <Container className={styles.header}>
        <p>My Tiny Blog</p>
        <Group spacing={5}>
          <AnchorLink href="#crime">
            <button>crime</button>
          </AnchorLink>
          <AnchorLink href="#history">
            <button>history</button>
          </AnchorLink>
          <AnchorLink href="#fiction">
            <button>fiction</button>
          </AnchorLink>
          <AnchorLink href="#magical">
            <button>magical</button>
          </AnchorLink>
          <AnchorLink href="#love">
            <button>love</button>
          </AnchorLink>
        </Group>
      </Container>
    </Header>
  );
}
