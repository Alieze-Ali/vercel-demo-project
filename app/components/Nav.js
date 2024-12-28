// Importing Link from Next.js to allow navigation between different pages
import Link from 'next/link';
import styles from './Nav.module.css'

// Creating the Navigation component, which will be a feature on all pages
const Navigation = () => {
    return (
        // The <nav> element is used to define the navigation section
        <nav className={styles.nav}>
                {/* Using Next.js Link components to define nav links */}
                {/* Each Link component points to a specific page in the app */}
                <Link href="/">Home</Link>
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