import { Header, Container, Group } from "@mantine/core";
import styles from "./mainHeader.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function MainHeader() {
  return (
    <div className={styles.header}>
      <Container className={styles.header__container}>
        <h1 className={styles.website__name}>My Tiny Blog</h1>
        <Group spacing={5}>
          <AnchorLink href="#crime">
            <li>Crime</li>
          </AnchorLink>
          <AnchorLink href="#history">
            <li>History</li>
          </AnchorLink>
          <AnchorLink href="#fiction">
            <li>Fiction</li>
          </AnchorLink>
          <AnchorLink href="#magical">
            <li>Magical</li>
          </AnchorLink>
          <AnchorLink href="#love">
            <li>Love</li>
          </AnchorLink>
        </Group>
      </Container>
    </div>
  );
}
