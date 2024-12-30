// Import the styles from Answer.module.css
import styles from "../components/Answer.module.css";

const AnswerSection = ({ section }) => {
  return (
    <div className={styles.answerSection}>
      {/* Render the section title if it exists */}
      {section.sectionTitle && (
        <h3 className={styles.contentTitle}>
          <strong>{section.sectionTitle}</strong>
        </h3>
      )}

      {/* Render paragraphs if the `paragraphs` array exists */}
      {section.paragraphs &&
        section.paragraphs.map((para, index) => (
          <p key={index} className={styles.answerParagraph}>
            {para}
          </p>
        ))}

      {/* Render unordered list if it exists */}
      {section.unorderedList && (
        <ul className={styles.unorderedList}>
          {section.unorderedList.map((item, index) => (
            <li key={index} className={styles.answerParagraph}>
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Render ordered list if it exists */}
      {section.orderedList && (
        <ol className={styles.orderedList}>
          {section.orderedList.map((item, index) => (
            <li key={index} className={styles.answerParagraph}>
              {item}
            </li>
          ))}
        </ol>
      )}

      {/* Render code block if it exists */}
      {section.code && (
        <pre className={styles.codeBlock}>
          <code>{section.code}</code>
        </pre>
      )}

      {/* Render links as an unordered list if the `links` array exists */}
      {section.links && (
        <ul className={styles.linkList}>
          {section.links.map((link, index) => (
            <li key={index} className={styles.linkListItem}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnswerSection;
