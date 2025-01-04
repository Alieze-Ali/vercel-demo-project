// Importing Link from Next.js to allow navigation between different pages
import Link from 'next/link';
import Image from 'next/image'; // Importing the Image component from Next.js
import styles from './Nav.module.css';

// Creating the Navigation component, which will be a feature on all pages
const Navigation = () => {
    return (
        // The <nav> element is used to define the navigation section
        <nav className={styles.nav}>
            {/* Using Next.js Link components to define nav links */}
            {/* Replacing 'Home' with a logo and text */}
            <Link href="/" className={styles.logoLink}>
                <div className={styles.logoContainer}>
                    <Image
                        className={styles.logo}
                        src="/vercel.svg"
                        alt="Vercel logomark"
                        width={20}
                        height={20}
                    />
                    <span className={styles.logoText}>Vercel</span>
                </div>
            </Link>
            {/* Remaining navigation links */}
            <Link href="/question-1">Q-1</Link>
            <Link href="/question-2">Q-2</Link>
            <Link href="/question-3">Q-3</Link>
            <Link href="/question-4">Q-4</Link>
            <Link href="/question-5">Q-5</Link>
            <Link href="/question-6">Q-6</Link>
            <Link href="/question-7">Q-7</Link>
            <Link href="/question-8">Q-8</Link>
        </nav>
    );
};

// Exporting the Nav component so it can be used in other parts of the app
export default Navigation;
