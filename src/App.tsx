import { FC, useEffect, useState } from "react";
import styles from "./app.module.css";
import ArticleList from "./components/ArticleList";
import { iArticle } from "./iArticle";
import MainHeader from "./components/MainHeader";

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
    data.tags.includes("Crime")
  );
  const historyData = data.filter((data: DataType) =>
    data.tags.includes("History")
  );
  const fictionData = data.filter((data: DataType) =>
    data.tags.includes("Fiction")
  );
  const magicalData = data.filter((data: DataType) =>
    data.tags.includes("Magical")
  );
  const loveData = data.filter((data: DataType) => data.tags.includes("Love"));

  return (
    <div>
      <header className={styles.header}>
        <MainHeader />
      </header>
      <main className={styles.main}>
        <section id="crime" className={styles.crime__container}>
          <ArticleList articles={crimeData} header="crime" />
        </section>

        <section id="history" className={styles.history__container}>
          <ArticleList articles={historyData} header="history" />
        </section>

        <section id="fiction" className={styles.fiction__container}>
          <ArticleList articles={fictionData} header="fiction" />
        </section>

        <section id="magical" className={styles.magical__container}>
          <ArticleList articles={magicalData} header="magical" />
        </section>

        <section id="love" className={styles.love__container}>
          <ArticleList articles={loveData} header="love" />
        </section>
      </main>
    </div>
  );
};

export default App;
