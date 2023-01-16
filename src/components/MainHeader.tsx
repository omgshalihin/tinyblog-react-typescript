import { Header, Container, Group } from "@mantine/core";
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
    </Header>
  );
}
