import { FC, useState } from "react";
import styles from "./app.module.css";
import ArticleList from "./components/ArticleList";
import { iArticle } from "./iArticle";

const mockdata = [
  {
    title: "Top 10 places to visit in Norway this summer",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 18, 2022",
    tag: "crime",
  },
  {
    title: "Top 10 places to visit in Norway this summer2",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 18, 2022",
    tag: "crime",
  },
  {
    title: "Top 10 places to visit in Norway this summer3",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 18, 2022",
    tag: "crime",
  },
  {
    title: "Best forests to visit in North America",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 27, 2022",
    tag: "history",
  },
  {
    title: "Hawaii beaches review: better than you think",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 9, 2022",
    tag: "comedy",
  },
  {
    title: "Hawaii beaches review: better than you think2",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 9, 2022",
    tag: "comedy",
  },
  {
    title: "Hawaii beaches review: better than you think3",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 9, 2022",
    tag: "comedy",
  },
  {
    title: "Mountains at night: 12 best locations to enjoy the view",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 12, 2022",
    tag: "mystery",
  },
];

const App: FC = () => {
  const crimeData = mockdata.filter((data) => data.tag === "crime");
  const historyData = mockdata.filter((data) => data.tag === "history");
  const comedyData = mockdata.filter((data) => data.tag === "comedy");
  const mysteryData = mockdata.filter((data) => data.tag === "mystery");
  return (
    <div>
      <h1>My Tiny Blog</h1>
      <section>
        <h2>Crime</h2>
        <ArticleList articles={crimeData} />
      </section>
      <section>
        <h2>history</h2>
        <ArticleList articles={historyData} />
      </section>
      <section>
        <h2>comedy</h2>
        <ArticleList articles={comedyData} />
      </section>
      <section>
        <h2>mystery</h2>
        <ArticleList articles={mysteryData} />
      </section>
    </div>
  );
};

export default App;
