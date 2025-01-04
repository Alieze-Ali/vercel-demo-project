
import Image from "next/image"; // Import Next.js Image component
import Navigation from "./components/Nav"; // Import the Navigation component
import styles from "./page.module.css"; // Import the styles


export default function Home() {
  return (
    <div className={styles.page}>
      {/* Main Content */}
      <main className={styles.main}>
        {/* Original Logo */}
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />


        <p>Explore the features and resources below:</p>


        {/* Call-to-Actions Section */}
        <div className={styles.ctas}>
          {/* Deploy Now Button */}
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>


          {/* Documentation Button */}
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className={styles.bottomNav}>
        <Navigation />
      </div>
    </div>
  );
}



