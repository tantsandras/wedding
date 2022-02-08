import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContactForm from "../components/ContactForm";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robin & Linnéa</title>
        <meta name="description" content="Robin och Linnéas bröllop" />
        <link rel="icon" href="/favicon3.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.left}></div>
          <h1 className={styles.title}>Robin och Linnéa</h1>
          <div className={styles.right}></div>
          <Image
            src="/robinochLinnea(6).png"
            aria-hidden="true"
            layout="fill"
            priority
          />
        </div>
        <div className={styles.grid}>
          <div className={styles.imageCard}>
            <Image
              src="/IMG_7353.jpg"
              alt="Robin och Linnea tittar på varandra på en solig dag"
              layout="fill"
              priority
            />
          </div>
          <div className={styles.card}>
            <h2>Vi gifter oss!</h2>
            <p>
              Plats:{" "}
              <a
                href="https://skansenkronan.se/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gå till Skansen Kronans hemsida"
              >
                Skansen Kronan
              </a>{" "}
              <br />
              Leijonsparres Väg 10, 436 50 Göteborg
            </p>
            <br />
            <p>
              Tid: Vigsel klockan 15, med efterföljande middag och fest
            </p>{" "}
            <br />
            <p>Klädkod: Kavaj</p> <br />
          </div>
          <div className={styles.imageCard}>
            <Image src="/datum.png" alt="Gröna löv" layout="fill" priority />
            <h2>Datum</h2>
            <p>14 / 05 / 2022</p>
          </div>

          <div className={styles.card}>
            <h2>Bra att veta</h2>
            <p>
              Vigseln kommer att ske utomhus, men om det blir Göteborgsväder
              flyttas den in i själva fästningen. Där kommer även middagen och
              festen äga rum. <br /> <br />
              Ingen blir gladare än vi om ni vill hålla tal. Kontakta i så fall
              gärna våra eminenta toastmasters för kvällen: Ellinor Fridh och
              Cristopher Grahl. De nås via: crgrahl@outlook.com.
              <br /> <br />
              Vi älskar era barn och om de vill får de gärna närvara vid
              vigseln. På middagen och festen vill vi dock gärna ha er för oss
              själva. <br />
              <br />
              Tveka inte att kontakta oss om ni har några frågor!
              <br />
              Linnéa: 070-519 21 20 <br />
              Robin: 070-850 45 73
            </p>
          </div>
          <div className={styles.formBox}>
            <div className={styles.card}>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <Image
          src="/R ve(2).png"
          alt="14 Maj, R & L"
          width={300}
          height={300}
        />
      </footer>
    </div>
  );
};

export default Home;
