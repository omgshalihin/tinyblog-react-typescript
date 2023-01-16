import { FC, useEffect, useState } from "react";
import styles from "./app.module.css";
import ArticleList from "./components/ArticleList";
import { iArticle } from "./iArticle";

type DataType = {
  tags: string | string[];
};

const App: FC = () => {
  const [data, setData] = useState<iArticle>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      setData(data.posts);
    };
    getData();
  }, []);

  if (data === undefined) return <h1>Loading...</h1>;

  const crimeData = data.filter((data: DataType) =>
    data.tags.includes("crime")
  );
  const historyData = data.filter((data: DataType) =>
    data.tags.includes("history")
  );
  const fictionData = data.filter((data: DataType) =>
    data.tags.includes("fiction")
  );
  const magicalData = data.filter((data: DataType) =>
    data.tags.includes("magical")
  );
  const loveData = data.filter((data: DataType) => data.tags.includes("love"));

  return (
    <div>
      <h1 className={styles.blog__title}>My Tiny Blog</h1>

      <section className={styles.crime__container}>
        <ArticleList articles={crimeData} header="crime" />
      </section>

      <section className={styles.history__container}>
        <ArticleList articles={historyData} header="history" />
      </section>

      <section className={styles.fiction__container}>
        <ArticleList articles={fictionData} header="fiction" />
      </section>

      <section className={styles.magical__container}>
        <ArticleList articles={magicalData} header="magical" />
      </section>

      <section className={styles.love__container}>
        <ArticleList articles={loveData} header="love" />
      </section>
    </div>
  );
};

export default App;
