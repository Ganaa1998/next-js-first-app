import Head from "next/head";
import styles from "../styles/Home.module.css";

import Player from "../components/Player";
import PlayerCSS from "../components/PlayerCSS";

export default function Home() {
  const videoJsOptions = {
    techOrder: ["youtube"],
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "https://www.youtube.com/watch?v=HYMDfMMD3fw&list=RDHYMDfMMD3fw&start_radio=1",
        type: "video/youtube",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Миний NextJS сайт!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Одоо л эхлэ!!!
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Миний тухай &rarr;</h3>
            <p>Би Next.js, React, Javascript технологиудад дуртай!</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Хобби &rarr;</h3>
            <p>Ном унших, кино үзэх, хэл сурах, хөдөө аялах дуртай</p>
          </a>

          <Player {...videoJsOptions} />
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Технологи{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
