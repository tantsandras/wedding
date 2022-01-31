import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContactForm from "../components/ContactForm";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robin + Linnéa</title>
        <meta name="description" content="Robin och Linnéas brollop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <Image
            src="/Robin + linnea(1).png"
            alt="Texten Robin och Linnea"
            layout="fill"
            priority
          />
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Info</h2>
            <p>
              Bröllop på: <a href="https://skansenkronan.se/">Skansen Kronan</a>{" "}
              <br />
              Leijonsparres Väg 10, 436 50 Göteborg
            </p>
            <br />
            <p>Tid: blabla - blabla</p> <br />
            <p>Klädkod: blabla</p> <br />
          </div>
          <div className={styles.imageCard}>
            <Image src="/datum.png" alt="Gröna löv" layout="fill" />
            <h2>Datum</h2>
            <p>14 / 05 / 2022</p>
          </div>

          <div className={styles.card}>
            <h2>Annan info</h2>
            <p>bllaablablabl ablablablbalbalbal balablabalba</p>
          </div>

          <div className={styles.card}>
            <ContactForm />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image
            src="/R ve(1).png"
            alt="14 Maj, R+L"
            width={300}
            height={300}
          />
        </span>
      </footer>
    </div>
  );
};

export default Home;
