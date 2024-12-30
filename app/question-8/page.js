// This is the page for Question 8

import styles from "../components/Answer.module.css"; // Import styles for consistent formatting

export default function Question8() {
  return (
    <div className="centered-page">
      {/* Question Title */}
      <h1>Question 8</h1>

      {/* Question Prompt */}
      <p>How could we improve or alter this familiarization exercise?</p>

      {/* Answer Container */}
      <div className={styles.answerContainer}>
        {/* Answer Title */}
        <h2 className={styles.answerTitle}>Answer</h2>

        {/* Answer Paragraphs */}
        <p className={styles.answerParagraph}>
          This project has been an incredible crash course—it feels like I’ve been in an accelerated mini Vercel bootcamp! I’ve learned so much, and I genuinely enjoyed digging into the product. That said, the time crunch made it tricky to bring my A-game. Building the app took about half the allotted time, leaving roughly 17 minutes per question—offering enough time to organize my thoughts, but not quite enough to deliver the kind of thoughtful answers I wanted to provide - and eventually did provide.
        </p>
        <p className={styles.answerParagraph}>
          I’ll admit, I’m guessing on the intended time split. Maybe the expectation was a quicker app build and more time for the questions, but either way, it felt tight. A little more clarity on how the time was meant to be divided—might help future candidates focus on delivering their best work rather than racing the clock.
        </p>
        <p className={styles.answerParagraph}>
          All in all, this was intense but rewarding. I’ve gained a ton from the process, and with a few tweaks, I think it could feel a bit more balanced while still keeping the bar high.
        </p>
      </div>
    </div>
  );
}
