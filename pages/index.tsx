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
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Robin och Linnéa</h1>
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
              Tid: Vigsel klockan 15, <br />
              med efterföljande mingel, middag och fest
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
              festen äga rum. I formuläret nedan får ni gärna skriva om ni har
              någon allergi eller andra kostpreferenser. Skriv också om ni
              föredrar alkoholfritt.
              <br /> <br />
              Ingen blir gladare än vi om ni vill hålla tal. Kontakta i så fall
              gärna våra eminenta toastmasters för kvällen: Ellinor Fridh och
              Cristopher Grahl. De nås via: crgrahl@outlook.com.
              <br /> <br />
              Vi älskar era barn, men den här dagen vill vi gärna ha er för oss
              själva. Självklart är spädbarn undantagna.
              <br />
              <br />
              Då vi redan bor tillsammans har vi det mesta ett hem behöver. Mest
              av allt önskar vi oss er närvaro på vår dag, men om ni ändå skulle
              vilja uppmärksamma oss på något mer sätt skulle vi bli glada för
              ett bidrag till vår bröllopsresa!
              <br />
              <br />
              Då det kommer närvara personer som är doftöverkänsliga ber vi er
              lämna starka dofter hemma.
              <br />
              <br />
              Tveka inte att kontakta oss om ni har några frågor eller
              funderingar!
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

<style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Playfair Display", serif;
  }

  * {
    box-sizing: border-box;
  }
`}</style>;

export default Home;
