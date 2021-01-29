import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from 'next/image'


export default function Home() {

  const myLoader = ({ src, width, quality }) => {
    return `${src}`
  }
  
  return (
    <div className={styles.container}>


      <Head>
        <title>Next-js туршилт</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Go!!!
        </h1>

        <div className={styles.grid}>

          <div className={styles.card}>
          <Image
          loader={myLoader}
            src="./01.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
            <h3>HEELS ONLY 20$</h3>
            <p>adidas Men's Grand Court Sneaker</p>
          </div>


          <div className={styles.card}>
          <Image
          loader={myLoader}
            src="./02.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
            <h3>$40.04 - $160.32</h3>
            <p>New Balance Men's 608 V5 Casual Comfort Cross Trainer</p>
          </div>


          <div className={styles.card}>
          <Image
          loader={myLoader}
            src="./03.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
            <h3>$41.09 - $142.01</h3>
            <p>BB4500 Hi 2</p>
          </div>


          <div className={styles.card}>
          <Image
          loader={myLoader}
            src="./04.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
            <h3>$56.99 - $169.26</h3>
            <p>New Balance Men's 481 V3 Trail Running Shoe</p>
          </div>
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
